import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        preloadingStrategy: PreloadAllModules,
        initialNavigation: 'enabled'
      }
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}