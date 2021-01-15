import { NgModule } from '@angular/core';

import { CurrencyEditComponent } from './currency-edit.component';
import { CurrencyRoutingModule } from './currency-edit-routing.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CurrencyEditComponent
  ],
  imports: [
    CurrencyRoutingModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports:[CurrencyEditComponent],
  providers: [],
  bootstrap: [CurrencyEditComponent]
})
export class CurrencyEditModule { }
