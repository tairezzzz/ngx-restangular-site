import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
  imports: [
    HeaderModule,
    FooterModule,
    MainRoutingModule,
  ],
  declarations: [
    MainComponent
  ],
})
export class MainModule {
}
