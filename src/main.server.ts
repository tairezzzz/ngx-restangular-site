import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import * as https from 'https';
import * as cron from 'cron';
import * as dotenv from 'dotenv';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ServerAppModule } from './app/server-app.module';
import { ngExpressEngine } from './modules/ng-express-engine/express-engine';
import { ROUTES } from './routes';
import { App } from './api/app';
import { enableProdMode } from '@angular/core';
enableProdMode();
const fs = require ('fs');
const app = express();
const api = new App();
const port = 53100;
const baseUrl = `http://localhost:${port}`;

let myDirName = fs.realpathSync('.');

dotenv.config({path: '.env'});

app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModule
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist', {index: false}));
app.use('/assets', express.static(myDirName + '/src/assets'));

ROUTES.forEach(route => {
  app.get(route, (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('../dist/index', {
      req: req,
      res: res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

app.get('/data', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  res.json(api.getData());
  console.timeEnd(`GET: ${req.originalUrl}`);
});

const options = {
  headers: {
    'User-Agent': 'ngx-restangular'
  },
  hostname: 'api.github.com',
  path: '/repos/2muchcoffeecom/ngx-restangular/readme',
  method: 'GET'
};

let CronJob = cron.CronJob;

let job = new CronJob({
  //cronTime: '00 */1 * * * *',
  cronTime: '00 30 11 * * *',
  onTick: function() {
    const req = https.request(options, (res) => {
      let file = '';
      res.on('data', (d) => {
        process.stdout.write(d);
        file += d;
      });
      res.on('end', () => {
        let h = JSON.parse(file);
      
        let b = new Buffer(h.content, 'base64');
        let s = b.toString();
        let showdown = require('showdown'),
          converter = new showdown.Converter({
            ghCompatibleHeaderId: true,
            simplifiedAutoLink: true,
            smartIndentationFix: true,
            ghCodeBlocks: true,
            excludeTrailingPunctuationFromURLs: true
          }),
          text = s,
          html = converter.makeHtml(text);
        showdown.setFlavor('github');

        fs.writeFile(myDirName + '/src/assets/readme', html, function(err) {
          if(err) {
            return console.log(err);
          }
        });
      });
    });
    req.on('error', (e) => {
      console.error(e);
    });
    req.end();
  },
  start: true
});
job.start();

app.listen(process.env.PORT,() => {
	console.log(`Listening at ${baseUrl}`);
});
