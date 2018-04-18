import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { IndexSectionComponent } from './index-section.component';
import { NgxSvgComponent } from './ngx-svg/ngx-svg.component';

@NgModule({
  declarations: [ 
    IndexSectionComponent,
    NgxSvgComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [ IndexSectionComponent ]
})

export class IndexSectionModule { }