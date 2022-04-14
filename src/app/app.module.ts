import { ErrorHandler, NgModule } from '@angular/core';
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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CanActivateRouteGuard } from './services/can-activate-route.guard';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { CommonModule } from '@angular/common';
import { PlayerDetailsComponent } from './player-details/playerDetails.component';

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
    FavouriteMatchesComponent,
    LoginComponent,
    SignupComponent,
    LoginSuccessComponent,
    UserEditComponent,
    PlayerDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }, CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



/*

user.json 

user : [
  { 
    name: string,
    pass:
    favouriteplayers: [
      {}
    ]
  }
]

globalPlayers:[

]

players: [
  { 

  }
]


*/
