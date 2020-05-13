import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { CharactersComponent } from './characters.component';
import { CharactersDetailComponent } from './characters-detail.component';
import { CharactersRoutingModule } from './characters-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CharactersRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [
    CharactersComponent,
    CharactersDetailComponent
  ]
})
export class CharactersModule {}
