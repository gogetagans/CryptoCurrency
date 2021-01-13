import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from './interfaces/portfolio.interface';
import { CrudService } from './crud.service';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService extends CrudService<Portfolio, number> {

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/portfolio`);
  }

}