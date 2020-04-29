import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpellsComponent } from './spells.component';
import { SpellsDetailComponent } from './spells-detail.component';

const mySubRoutes: Routes = [
  { path: 'spells', component: SpellsComponent},
  { path: 'spells/:id', component: SpellsDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(mySubRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SpellsRoutingModule { }
