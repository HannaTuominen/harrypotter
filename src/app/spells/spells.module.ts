import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { SpellsComponent } from './spells.component';
import { SpellsDetailComponent } from './spells-detail.component';
import { SpellsRoutingModule } from './spells-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SpellsRoutingModule
  ],
  declarations: [
    SpellsComponent,
    SpellsDetailComponent
  ]
})
export class SpellsModule {}
