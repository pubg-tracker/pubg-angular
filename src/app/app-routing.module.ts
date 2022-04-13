import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FavouriteMatchesComponent } from './favourite-matches/favourite-matches.component';
import { FavouritePlayersComponent } from './favourite-players/favourite-players.component';
import { GlobalPlayersComponent } from './global-players/global-players.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatchParticipantsComponent } from './match-participants/match-participants.component';
import { MatchesComponent } from './matches/matches.component';
import { SignupComponent } from './signup/signup.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { PlayerDetailsComponent } from './player-details/playerDetails.component'
import { LoginSuccessComponent } from './login-success/login-success.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CanActivateRouteGuard } from './services/can-activate-route.guard';

const routes: Routes = [
  { path: '', pathMatch: "full", component: LoginComponent },
  { path: 'home', pathMatch: "full", component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-success', component: LoginSuccessComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'player-details', component: PlayerDetailsComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'match-participants', component: MatchParticipantsComponent },
  { path: 'favourite-matches', component: FavouriteMatchesComponent },
  { path: 'global-players', component: GlobalPlayersComponent },
  { path: 'favourite-players', component: FavouritePlayersComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}




// const routes: Routes = [
//   { path: '', pathMatch: "full", component: LoginComponent },
//   { path: 'home', pathMatch: "full", component: HomeComponent, canActivate: [CanActivateRouteGuard] },
//   { path: 'login', component: LoginComponent },
//   { path: 'login-success', component: LoginSuccessComponent, canActivate: [CanActivateRouteGuard] },
//   { path: 'signup', component: SignupComponent },
//   { path: 'player-details', component: PlayerDetailsComponent, canActivate: [CanActivateRouteGuard] },
//   { path: 'tournaments', component: TournamentsComponent, canActivate: [CanActivateRouteGuard] },
//   { path: 'matches', component: MatchesComponent, canActivate: [CanActivateRouteGuard] },
//   { path: 'match-participants', component: MatchParticipantsComponent, canActivate: [CanActivateRouteGuard] },
//   { path: 'favourite-matches', component: FavouriteMatchesComponent, canActivate: [CanActivateRouteGuard] },
//   { path: 'global-players', component: GlobalPlayersComponent, canActivate: [CanActivateRouteGuard] },
//   { path: 'favourite-players', component: FavouritePlayersComponent, canActivate: [CanActivateRouteGuard] },
//   { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
//   { path: '**', redirectTo: '/not-found' }
// ];