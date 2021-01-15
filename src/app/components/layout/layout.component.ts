import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/services/currency.service';
import { Currency } from 'src/services/interfaces/currency.interface';
import { Portfolio } from 'src/services/interfaces/portfolio.interface';
import { PortfolioLine } from 'src/services/interfaces/portfolio-line.interface';
import { PortfolioLineService } from 'src/services/portfolio-line.service';
import { PortfolioService } from 'src/services/portfolio.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'cripto-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription = new Subscription();
  currencies = new Array<Currency>();
  portfolios = new Array<Portfolio>();
  portfolioLines = new Array<PortfolioLine>();

  constructor(
    private _currencyService: CurrencyService,
    private _portfolioService: PortfolioService,
    private _portfolioLineService: PortfolioLineService,
    private _router: Router) { }



  ngOnInit() {
    this._subscriptions.add(this._currencyService.findAll().subscribe(({ _embedded: embedded }) => {
      const { currencies } = embedded;
      this.currencies = currencies;
      // console.log('currencies',this.currencies);
    }));

    this._subscriptions.add(this._portfolioService.findAll().subscribe(({ _embedded: embedded }) => {
      const { portfolios } = embedded;
      this.portfolios = portfolios;
      // console.log('portfolios', this.portfolios);
    }));

  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  public handleDeleteCurrency(id: number) {
    this._subscriptions.add(
      this._currencyService.delete(id).subscribe()
    );

  }

  public handleDeletePortfolio(id: number) {
    this._subscriptions.add(
      this._portfolioService.delete(id).subscribe()
    );
  }

  public managePortfolioLines(id: number){
    this._router.navigate(['portfolio','line', id]);
  }

  public handleEditCurrency(id: number) {
    this._router.navigate(['currency', id]);
  }

  public handleEditPortfolio(id: number) {
    this._router.navigate(['portfolio', id]);
  }


}



