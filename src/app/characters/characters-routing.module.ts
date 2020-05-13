import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters.component';
// import { CharactersDetailComponent } from './characters-detail.component';

const mySubRoutes: Routes = [
  { path: 'characters', component: CharactersComponent},
  { path: 'characters/:id', component: CharactersComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(mySubRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CharactersRoutingModule { }
