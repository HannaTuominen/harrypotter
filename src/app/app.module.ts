import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NotfoundComponent} from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import {CharactersModule} from './characters/characters.module';
import {SpellsModule} from './spells/spells.module';
import {HousesModule} from './houses/houses.module';
import {HarryPotterService} from './harrypotter.service';

// ng g component houses
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CharactersModule,
    SpellsModule,
    HousesModule
  ],
  providers: [HarryPotterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
