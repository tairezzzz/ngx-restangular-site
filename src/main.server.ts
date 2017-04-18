import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
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
const port = 8000;
const baseUrl = `http://localhost:${port}`;
let myDirName = fs.realpathSync('.');
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

app.get('/readme', (req, res) => {
  res.send('Hello World!');
  //console.time(`GET: ${req.originalUrl}`);
  //res.json(api.getData());
  //console.timeEnd(`GET: ${req.originalUrl}`);
  console.log('test');
});

app.listen(8000,() => {
	console.log(`Listening at ${baseUrl}`);
});
