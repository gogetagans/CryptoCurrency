import { NgModule } from '@angular/core';



import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PortfolioLineService } from 'src/services/portfolio-line.service';
import { PortfolioService } from 'src/services/portfolio.service';
import { CurrencyService } from 'src/services/currency.service';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    LayoutRoutingModule,
    CommonModule,
    NgbModule,
    HttpClientModule
    
  ],
  exports:[LayoutComponent],
  providers: [CurrencyService, PortfolioService, PortfolioLineService],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
