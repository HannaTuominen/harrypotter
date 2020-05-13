import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { CharactersComponent } from './characters.component';
import { CharactersDetailComponent } from './characters-detail.component';
import { CharactersRoutingModule } from './characters-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        CharactersRoutingModule,
        MatSidenavModule
    ],
  declarations: [
    CharactersComponent,
    CharactersDetailComponent
  ]
})
export class CharactersModule {}
