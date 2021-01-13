import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/services/currency.service';
import { Currency } from 'src/services/interfaces/currency.interface';
import { PortfolioLine } from 'src/services/interfaces/portfolio-line.interface';
import { Portfolio } from 'src/services/interfaces/portfolio.interface';
import { PortfolioLineService } from 'src/services/portfolio-line.service';
import { PortfolioService } from 'src/services/portfolio.service';

@Component({
  selector: 'cripto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  private _subscriptions: Subscription = new Subscription();
  currencies = new Array<Currency>();
  portfolios = new Array<Portfolio>();
  portfolioLines = new Array<PortfolioLine>();
  
  constructor(
    private _currencyService: CurrencyService,
    private _portfolioService: PortfolioService,
    private _portfolioLineService: PortfolioLineService){}
 
  ngOnInit() {
    this._subscriptions.add(this._currencyService.findAll().subscribe(({_embedded: embedded}) => {
      const {currencies} = embedded;
      this.currencies = currencies;
      console.log('currencies',this.currencies);
    })); 

    this._subscriptions.add(this._portfolioService.findAll().subscribe(({_embedded: embedded}) => {
      const {portfolios} = embedded;
      this.portfolios = portfolios;
      console.log('portfolios', this.portfolios);
    })); 

    this._subscriptions.add(this._portfolioLineService.findAll().subscribe(({_embedded: embedded}) => {
      const {portfolioLines} = embedded;
      this.portfolioLines = portfolioLines;
      console.log('portfolioLine',this.portfolioLines);
    })); 

  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}
