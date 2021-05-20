import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetListItemComponent } from './planet-list-item/planet-list-item.component';
import { WantToVisitComponent } from './want-to-visit/want-to-visit.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    PlanetListItemComponent,
    WantToVisitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
