import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from './interfaces/currency.interface';
import { CrudService } from './crud.service';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService extends CrudService<Currency, number> {

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/currency`);
  }

}