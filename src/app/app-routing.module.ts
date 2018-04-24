import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [];

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