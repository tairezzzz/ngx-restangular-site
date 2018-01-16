import { NgModule } from '@angular/core';
import { IndexSectionComponent } from './index-section.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [IndexSectionComponent],
  imports: [
    SharedModule,
  ],
  exports: [ IndexSectionComponent ]
})

export class IndexSectionModule { }