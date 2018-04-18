import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { APP_SERVICE_PROVIDERS } from './services/index';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    APP_SERVICE_PROVIDERS
  ]
})
export class CoreModule {}