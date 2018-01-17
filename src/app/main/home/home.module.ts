import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { IndexSectionModule } from './index-section/index-section.module';
import { BenefitsSectionModule } from './benefits-section/benefits-section.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    IndexSectionModule,
    BenefitsSectionModule,
    ]
})

export class HomeModule { }