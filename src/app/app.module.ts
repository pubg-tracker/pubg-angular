import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatchParticipantsComponent } from './match-participants/match-participants.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { HomeComponent } from './home/home.component';
import { GlobalPlayersComponent } from './global-players/global-players.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FavouritePlayersComponent } from './favourite-players/favourite-players.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchParticipantsComponent,
    PlayerListComponent,
    HomeComponent,
    GlobalPlayersComponent,
    ErrorPageComponent,
    FavouritePlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
