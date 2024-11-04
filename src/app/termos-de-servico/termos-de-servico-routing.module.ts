import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermosDeServicoPage } from './termos-de-servico.page';

const routes: Routes = [
  {
    path: '',
    component: TermosDeServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermosDeServicoPageRoutingModule {}
