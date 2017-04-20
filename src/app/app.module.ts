import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home/home-view.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoreModule } from './core/core.module';
//import { MarkdownModule } from 'angular2-markdown';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TransferHttpModule,
    CoreModule,
    //MarkdownModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeViewComponent, pathMatch: 'full'},
      {path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'}
    ]),
    Ng2PageScrollModule.forRoot()
  ],
  declarations: [AppComponent, HomeViewComponent, SidebarComponent],
  exports: [AppComponent]
})
export class AppModule {
}
