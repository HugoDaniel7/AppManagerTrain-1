import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapalocalPage } from './mapalocal.page';

const routes: Routes = [
  {
    path: '',
    component: MapalocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapalocalPageRoutingModule {}
