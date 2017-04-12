import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { Ng2PageScrollModule } from 'ng2-page-scroll';


@NgModule({
	imports: [
        CommonModule,
        HttpModule,
        TransferHttpModule,
        RouterModule.forRoot([
          { path: '', component: HomeView, pathMatch: 'full'},
          { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'}
        ]),
        Ng2PageScrollModule.forRoot()
	],
	declarations: [ AppComponent, HomeView ],
  exports: [ AppComponent ]
})
export class AppModule {}
