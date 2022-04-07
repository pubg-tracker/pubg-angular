import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FavouriteMatchesComponent } from './favourite-matches/favourite-matches.component';
import { FavouritePlayersComponent } from './favourite-players/favourite-players.component';
import { GlobalPlayersComponent } from './global-players/global-players.component';
import { HomeComponent } from './home/home.component';
import { MatchParticipantsComponent } from './match-participants/match-participants.component';
import { MatchesComponent } from './matches/matches.component';
import { TournamentsComponent } from './tournaments/tournaments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
