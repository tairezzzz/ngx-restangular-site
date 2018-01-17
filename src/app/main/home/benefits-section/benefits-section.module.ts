import { NgModule } from '@angular/core';
import { BenefitsSectionComponent } from './benefits-section.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BenefitsSectionComponent],
  imports: [
    SharedModule,
  ],
  exports: [ BenefitsSectionComponent ]
})

export class BenefitsSectionModule { }