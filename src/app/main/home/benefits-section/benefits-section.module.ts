import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { BenefitsSectionComponent } from './benefits-section.component';

import { RobotSvgComponent } from './robot-svg/robot-svg.component';
import { SatelliteSvgComponent } from './satellite-svg/satellite-svg.component';
import { RocketSvgComponent } from './rocket-svg/rocket-svg.component';
import { TrainSvgComponent } from './train-svg/train-svg.component';
import { UfoSvgComponent } from './ufo-svg/ufo-svg.component';
import { OneSvgComponent } from './one-svg/one-svg.component';

@NgModule({
  declarations: [
      BenefitsSectionComponent,
      RobotSvgComponent,
      SatelliteSvgComponent,
      RocketSvgComponent,
      TrainSvgComponent,
      UfoSvgComponent,
      OneSvgComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [ BenefitsSectionComponent ]
})

export class BenefitsSectionModule { }