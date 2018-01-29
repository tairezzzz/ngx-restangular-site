import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';

const appRoutes: Routes = [
  {path: '', loadChildren: './main/main.module#MainModule'},

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