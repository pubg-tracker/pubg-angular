import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-players',
  templateUrl: './favourite-players.component.html',
  styleUrls: ['./favourite-players.component.css']
})
export class FavouritePlayersComponent implements OnInit {

  parentName: string = 'favourite-players';

  constructor() { }

  ngOnInit(): void {
  }

}
