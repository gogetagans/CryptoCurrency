import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { First, PortfolioLine } from 'src/services/interfaces/portfolio-line.interface';
import { PortfolioLineService } from 'src/services/portfolio-line.service';


@Component({
  selector: 'cripto-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit, OnDestroy{
  id:number;
  amount: number;
  currency: First;
  portfolio: First;
  line: PortfolioLine;
  _subscriptions: Subscription = new Subscription();
  form: FormGroup; 

  constructor(
    private _portfolioLineService:PortfolioLineService, 
    private _router: Router,
    private _route: ActivatedRoute){}

  ngOnInit() { 
    this._getIdfromUrl();
    this._getLinesById();

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    });
   }

   private _getIdfromUrl(){
   this._subscriptions.add(this._route.params.subscribe(params => {
       const id = params['id'];
       this.id = id;
     }));
   }

   
  private _getLinesById(){
     this._subscriptions.add(
      this._portfolioLineService.findOne(this.id).subscribe(({amount, _links:links})=> {
        const {currency, portfolio} = links;
        this.currency= currency;
        this.portfolio = portfolio;
        this.amount = amount;
        
      })
    );
  }

  ngOnDestroy(): void {
   this._subscriptions.unsubscribe();
  }

  handlerCreate(){
   // He deshabilitado la creacion de Lineas de Portfolio porque no tiene sentido segun veo en Swagger. 
   // El back no esta preparado para soportar un array de Lines para un Portfolio.
   // Deberia tener sentido si el servicio GET /api/portfolioline/{id} me devolviera un array aunque sea de un unico elemento, pero
   // me devuelve directamente un objeto. Interpreto que un Portfolio solo tiene 1 Line (relacion 0,1) y no 1:n
   // El PDF no es claro con esto
  }

  handleDeletePortfolioLine(id: number){
    this._portfolioLineService.delete(id).subscribe();
  }

  handleEditPortfolioLine(id: number){
   // Ante las dudas que me supone la creacion de Lineas de Portfolio, tengo dudas con respecto a la edicion ya que no se 
   // qué se espera que se edite, bien los campos propios del Line (amount) o añadir/eliminar currencies y portfolios como arrays. Si
   // es esto último tampoco encuentro sentido al servicio GET /api/portfolioline/{id} pues en cada una de las secciones portfolio,currency deberian
   // ser arrays. El PDF tampoco es claro en este sentido.
  }

  handlerBack(){
    this._router.navigate(['layout']);
  }
  

  }

 

