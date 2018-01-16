import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { MainRoutingModule } from './main-routing.module';

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
