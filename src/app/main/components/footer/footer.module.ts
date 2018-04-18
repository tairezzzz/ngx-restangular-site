import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    SharedModule
  ]
})
export class FooterModule {
}