import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/services/currency.service';
import { Currency } from 'src/services/interfaces/currency.interface';
import { PortfolioLineService } from 'src/services/portfolio-line.service';


@Component({
  selector: 'cripto-currency-edit',
  templateUrl: './currency-edit.component.html',
  styleUrls: ['./currency-edit.component.scss']
})
export class CurrencyEditComponent implements OnInit, OnDestroy{
  
  private _subscriptions: Subscription = new Subscription();
  currency:Currency;
  id: number;
  error= false;
  currencyForm: FormGroup;

  constructor(
    private _route: ActivatedRoute, 
    private _currencyService: CurrencyService,
    private _router: Router){}
 
  ngOnInit() {
    this._getIdFromUrl();
   
  }
  
  ngOnDestroy(): void {
    this._subscriptions.unsubscribe()
  }
  
  
  private _getCurrencyById(id: number){
    this._subscriptions.add(this._currencyService.findOne(id).subscribe(
      currency => { 
        this.currency= currency;
        this._setValueForm();
      },
      () => this.error = true))
  }

  private _setValueForm(){
    const {acronym, name} = this.currency;
    this.currencyForm = new FormGroup({
      acronym: new FormControl(acronym, Validators.required),
      name: new FormControl(name, Validators.required),
    });
  }

  private _getIdFromUrl(){
    this._subscriptions.add(this._route.params.subscribe(params => {
      const id = params['id'];
      this.id= id;
      this._getCurrencyById(id);
    }));
  }

  close() {
    this._router.navigate(['layout']);
  }

  handlerUpdate(){
    const {id} = this.currency;
    this.currency = {id, name: this.currencyForm.controls['name'].value, acronym: this.currencyForm.controls['acronym'].value};
    this._currencyService.update(id, this.currency).subscribe(data => console.log(data));
    this.handlerBack();
  }
  
  handlerBack(){
    this._router.navigate(['layout']);
  }

  }

 

