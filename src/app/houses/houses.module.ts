import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { HousesComponent } from './houses.component';
import { HousesDetailComponent } from './houses-detail.component';
import { HousesRoutingModule } from './houses-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HousesRoutingModule
  ],
  declarations: [
    HousesComponent,
    HousesDetailComponent
  ]
})
export class HousesModule {}
