import { NgModule } from '@angular/core';

import { CurrencyComponent } from './currency.component';
import { CurrencyRoutingModule } from './currency-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CurrencyComponent
  ],
  imports: [
    CurrencyRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[CurrencyComponent],
  providers: [],
  bootstrap: [CurrencyComponent]
})
export class CurrencyModule { }
