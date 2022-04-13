import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../models/playerDetails';

@Component({
  selector: 'player-details',
  templateUrl: './playerDetails.component.html',
  styleUrls: ['./playerDetails.component.css'],
})
export class PlayerDetailsComponent implements OnInit {
  player: any = {};

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


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap);
    let data: any = this.route.snapshot.paramMap.get('playerInfo');
    let obj = JSON.parse(data);
    console.log(data);
    this.player = {
      id: obj.id,
      DBNOs: obj.attributes.stats.DBNOs,
      assists: obj.attributes.stats.assists,
      boosts: obj.attributes.stats.boosts,
      damageDealt: obj.attributes.stats.damageDealt,
      deathType: obj.attributes.stats.deathType,
      headshotKills: obj.attributes.stats.headshotKills,
      heals: obj.attributes.stats.heals,
      killPlace: obj.attributes.stats.killPlace,
      killStreaks: obj.attributes.stats.killStreaks,
      kills: obj.attributes.stats.kills,
      longestKill: obj.attributes.stats.longestKill,
      name: obj.attributes.stats.name,
      playerId: obj.attributes.stats.playerId,
      revives: obj.attributes.stats.revives,
      rideDistance: obj.attributes.stats.rideDistance,
      roadKills: obj.attributes.stats.roadKills,
      swimDistance: obj.attributes.stats.swimDistance,
      teamKills: obj.attributes.stats.teamKills,
      timeSurvived: obj.attributes.stats.timeSurvived,
      vehicleDestroys: obj.attributes.stats.vehicleDestroys,
      walkDistance: obj.attributes.stats.walkDistance,
      weaponsAcquired: obj.attributes.stats.weaponsAcquired,
      winPlace: obj.attributes.stats.winPlace,
    };
  }

  navigateTo() {
    this.router.navigate(['favourite-players'])
  }
}
