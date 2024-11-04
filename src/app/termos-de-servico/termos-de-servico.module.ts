import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermosDeServicoPageRoutingModule } from './termos-de-servico-routing.module';

import { TermosDeServicoPage } from './termos-de-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermosDeServicoPageRoutingModule
  ],
  declarations: [TermosDeServicoPage]
})
export class TermosDeServicoPageModule {}
