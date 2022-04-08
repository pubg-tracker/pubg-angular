import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  playerName: string = 'johnwick';
  playerID: string = '007';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo() {
    this.router.navigate(['player-details']);
  }

}
