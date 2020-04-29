import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HousesComponent } from './houses.component';
import { HousesDetailComponent } from './houses-detail.component';

const mySubRoutes: Routes = [
  { path: 'houses', component: HousesComponent},
  { path: 'houses/:id', component: HousesDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(mySubRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HousesRoutingModule { }
