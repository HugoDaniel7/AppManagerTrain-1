import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermosDePrivacidadePageRoutingModule } from './termos-de-privacidade-routing.module';

import { TermosDePrivacidadePage } from './termos-de-privacidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermosDePrivacidadePageRoutingModule
  ],
  declarations: [TermosDePrivacidadePage]
})
export class TermosDePrivacidadePageModule {}
