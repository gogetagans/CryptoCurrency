import { NgModule } from '@angular/core';

import { PortfolioComponent } from './portfolio.component';
import { CurrencyRoutingModule } from './portfolio-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CurrencyRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[PortfolioComponent],
  providers: [],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule { }
