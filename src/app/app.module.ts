import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpellsComponent } from './spells/spells.component';
import { HousesComponent } from './houses/houses.component';
import { AppRoutingModule } from './app-routing.module';
import {NotfoundComponent} from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import {CharactersModule} from './characters/characters.module';
import {SpellsModule} from './spells/spells.module';
// ng g component houses
@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CharactersModule,
    SpellsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
