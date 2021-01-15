import { NgModule } from '@angular/core';

import { LineComponent } from './line.component';
import { LineRoutingModule } from './line-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LineComponent
  ],
  imports: [
    LineRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[LineComponent],
  providers: [],
  bootstrap: [LineComponent]
})
export class LineModule { }
