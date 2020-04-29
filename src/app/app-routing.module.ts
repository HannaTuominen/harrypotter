import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {HousesComponent} from './houses/houses.component';
import {SpellsComponent} from './spells/spells.component';

const appRoutes: Routes = [
  { path: 'houses', component: HousesComponent },
  // { path: 'spells', component: SpellsComponent },
  { path: '', redirectTo: 'houses', pathMatch: 'full'},
  // pathmatch: 'prefix' means that is should start with the path
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
