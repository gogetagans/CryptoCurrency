import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'layout',
    loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'currency',
    loadChildren: () => import('./components/currency/currency.module').then(m => m.CurrencyModule)
  },
  {
    path: 'currency/:id',
    loadChildren: () => import('./components/currency-edit/currency-edit.module').then(m => m.CurrencyEditModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./components/porfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'portfolio/line/:id',
    loadChildren: () => import('./components/line/line.module').then(m => m.LineModule)
  },
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'layout'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
