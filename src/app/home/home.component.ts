import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = [
    {
      title: 'Tournaments',
      img: '../../assets/tournaments.svg',
      route: 'tournaments'
    },
    {
      title: 'Global Players',
      img: '../../assets/global_players.svg',
      route: 'global-players'
    },
    {
      title: 'Favourite Players',
      img: '../../assets/favourite_players.svg',
      route: 'favourite-players'
    },
    {
      title: 'Favourite Matches',
      img: '../../assets/favourite_matches.svg',
      route: 'favourite-matches'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigate(event: any): void {
    this.router.navigate([event]);
  }

}
