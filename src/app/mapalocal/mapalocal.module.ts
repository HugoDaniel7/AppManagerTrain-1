import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapalocalPageRoutingModule } from './mapalocal-routing.module';

import { MapalocalPage } from './mapalocal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapalocalPageRoutingModule
  ],
  declarations: [MapalocalPage]
})
export class MapalocalPageModule {}
