import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermosDePrivacidadePage } from './termos-de-privacidade.page';

const routes: Routes = [
  {
    path: '',
    component: TermosDePrivacidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermosDePrivacidadePageRoutingModule {}
