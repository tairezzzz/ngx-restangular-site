import { NgModule }       from '@angular/core';
import { MainService } from './services/main.service';
import { RestangularModule } from 'ng2-restangular';
import { MarkdownModule } from 'angular2-markdown';

export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('https://api.github.com/repos/2muchcoffeecom');
  }

@NgModule({
  imports:      [
    RestangularModule.forRoot(RestangularConfigFactory),
    //MarkdownModule.forRoot()
  ],
  declarations: [

  ],
  providers:    [
    MainService
  ]
})
export class CoreModule {
  
}