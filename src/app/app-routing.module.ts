import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component';
import {CharactersComponent} from './characters/characters.component';
import {HousesComponent} from './houses/houses.component';

const appRoutes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'houses', component: HousesComponent },
  { path: '', redirectTo: 'houses', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent }
  // pathmatch: 'prefix' means that is should start with the path
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
      )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
