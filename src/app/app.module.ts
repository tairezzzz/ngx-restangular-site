import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './main/core/core.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { BenefitsSectionModule } from './main/home/benefits-section/benefits-section.module';

import { RobotSvgComponent } from './main/home/benefits-section/robot-svg/robot-svg.component';
import { SatelliteSvgComponent} from './main/home/benefits-section/satellite-svg/satellite-svg.component';
import { RocketSvgComponent } from './main/home/benefits-section/rocket-svg/rocket-svg.component';
import { TrainSvgComponent } from './main/home/benefits-section/train-svg/train-svg.component';
import { UfoSvgComponent } from './main/home/benefits-section/ufo-svg/ufo-svg.component';
import { OneSvgComponent } from './main/home/benefits-section/one-svg/one-svg.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    CoreModule,
    MainModule,
    BenefitsSectionModule,
    AppRoutingModule,
  ],
  providers: [],
    entryComponents: [
      RobotSvgComponent,
      SatelliteSvgComponent,
      RocketSvgComponent,
      TrainSvgComponent,
      UfoSvgComponent,
      OneSvgComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
