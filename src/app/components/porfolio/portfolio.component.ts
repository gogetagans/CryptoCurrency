import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Portfolio } from 'src/services/interfaces/portfolio.interface';
import { PortfolioService } from 'src/services/portfolio.service';


@Component({
  selector: 'cripto-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy{
  
  portfolio: Portfolio;
  subscriptions: Subscription = new Subscription();
  form: FormGroup; 

  constructor(
    private _portfolioService:PortfolioService, 
    private _router: Router){}

  ngOnInit() { 
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    });
   }

  ngOnDestroy(): void {
   this.subscriptions.unsubscribe();
  }

  handlerCreate(){
    this.portfolio = this.form.value;
    this.subscriptions.add(this._portfolioService.save(this.portfolio).subscribe(data=> console.log(data)));
  }

  handlerBack(){
    this._router.navigate(['layout']);
  }
  

  }

 

