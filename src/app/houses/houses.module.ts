import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { HousesComponent } from './houses.component';
import { HousesDetailComponent } from './houses-detail.component';
import { HousesRoutingModule } from './houses-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HousesRoutingModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule
  ],
  declarations: [
    HousesComponent,
    HousesDetailComponent
  ]
})
export class HousesModule {}
