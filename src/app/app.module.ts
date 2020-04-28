import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { SpellsComponent } from './spells/spells.component';
import { HousesComponent } from './houses/houses.component';
import { AppRoutingModule } from './app-routing.module';
import {NotfoundComponent} from './notfound/notfound.component';

// ng g component houses
@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    SpellsComponent,
    HousesComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
