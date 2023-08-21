import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { UiSpanComponent } from './components/ui-span/ui-span.component';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    HomePageComponent,
    CharactersPageComponent,
    UiSpanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
