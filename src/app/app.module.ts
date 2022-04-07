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
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { MatchesComponent } from './matches/matches.component';
import { FavouriteMatchesComponent } from './favourite-matches/favourite-matches.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchParticipantsComponent,
    PlayerListComponent,
    HomeComponent,
    GlobalPlayersComponent,
    ErrorPageComponent,
    FavouritePlayersComponent,
    ListItemComponent,
    ListComponent,
    TournamentsComponent,
    MatchesComponent,
    FavouriteMatchesComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
