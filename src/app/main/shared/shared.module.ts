import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { APP_DIRECTIVES } from './directives/index';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    APP_DIRECTIVES,
  ],
  imports: [],
  exports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    APP_DIRECTIVES,
  ]
})
export class SharedModule {
}
