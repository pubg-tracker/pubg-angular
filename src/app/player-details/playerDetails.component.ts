import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../models/playerDetails';

@Component({
  selector: 'player-details',
  templateUrl: './playerDetails.component.html',
  styleUrls: ['./playerDetails.component.css'],
})
export class PlayerDetailsComponent implements OnInit {
  player: Player = {
    id: "6ea3546e-c548-4332-8064-b38035f1e1cd",
    status: "pro",
    DBNOs: 2,
    assists: 0,
    boosts: 5,
    damageDealt: 505.0444,
    deathType: "byplayer",
    headshotKills: 1,
    heals: 6,
    killPlace: 9,
    killStreaks: 2,
    kills: 3,
    longestKill: 111.711914,
    name: "EXN_Salik",
    playerId: "account.da99015a66314410ad083e069b9774e7",
    revives: 0,
    rideDistance: 4928.9043,
    roadKills: 0,
    swimDistance: 0,
    teamKills: 0,
    timeSurvived: 1179,
    vehicleDestroys: 0,
    walkDistance: 1219.8293,
    weaponsAcquired: 6,
    winPlace: 10,
  };

  // id: "6ea3546e-c548-4332-8064-b38035f1e1cd",

  // "status": 

  // 				"DBNOs": 2,
  // 				"assists": 0,
  // 				"boosts": 5,
  // 				"damageDealt": 505.0444,
  // 				"deathType": "byplayer",
  // 				"headshotKills": 1,
  // 				"heals": 6,
  // 				"killPlace": 9,
  // 				"killStreaks": 2,
  // 				"kills": 3,
  // 				"longestKill": 111.711914,
  // 				"name": "EXN_Salik",
  // 				"playerId": "account.da99015a66314410ad083e069b9774e7"
  // 				"revives": 0,
  // 				"rideDistance": 4928.9043,
  // 				"roadKills": 0,
  // 				"swimDistance": 0,
  // 				"teamKills": 0,
  // 				"timeSurvived": 1179,
  // 				"vehicleDestroys": 0
  // 				"walkDistance": 1219.8293
  // 				"weaponsAcquired": 6
  // 				"winPlace": 10


  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateTo() {
    this.router.navigate(['favourite-players'])
  }
}
