import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/services/currency.service';
import { Currency } from 'src/services/interfaces/currency.interface';


@Component({
  selector: 'cripto-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit, OnDestroy{
  
  currency: Currency;
  subscriptions: Subscription = new Subscription();
  form: FormGroup; 

  constructor(private _currencyService:CurrencyService, private _router: Router){}

  ngOnInit() { 
    this.form = new FormGroup({
      acronym: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
    });
   }

  ngOnDestroy(): void {
   this.subscriptions.unsubscribe();
  }

  handlerCreate(){
    this.currency = this.form.value;
    this.subscriptions.add(this._currencyService.save(this.currency).subscribe(data=> console.log(data)));
    this.handlerBack();
  }

  handlerBack(){
    this._router.navigate(['layout']);
  }
  

  }

 

