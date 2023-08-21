import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { UiSpanComponent } from './components/ui-span/ui-span.component';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects'
import { ItemsEffects } from './state/effects/characters.effects';

import * as fromApp from './state/app.state';

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
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([ItemsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
