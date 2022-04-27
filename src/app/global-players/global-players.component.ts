import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-players',
  templateUrl: './global-players.component.html',
  styleUrls: ['./global-players.component.css']
})
export class GlobalPlayersComponent implements OnInit {
  parentName: string = 'global-players';
  constructor() { }

  ngOnInit(): void {
  }

}
