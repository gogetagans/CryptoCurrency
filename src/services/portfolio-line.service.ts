import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PortfolioLine } from './interfaces/portfolio-line.interface';
import { CrudService } from './crud.service';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PortfolioLineService extends CrudService<PortfolioLine, number> {

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/portfolioline`);
  }

}