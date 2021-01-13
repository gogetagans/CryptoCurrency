import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyService } from 'src/services/currency.service';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioService } from 'src/services/portfolio.service';
import { PortfolioLineService } from 'src/services/portfolio-line.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CurrencyService, PortfolioService, PortfolioLineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
