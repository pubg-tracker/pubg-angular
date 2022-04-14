import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../models/player';
import { MatchService } from '../services/match-service.service';
import { PlayerService } from '../services/player-service.service';

@Component({
  selector: 'player-details',
  templateUrl: './playerDetails.component.html',
  styleUrls: ['./playerDetails.component.css'],
})
export class PlayerDetailsComponent implements OnInit {
  player: any = {};

  constructor(private router: Router, private route: ActivatedRoute, private playerService: PlayerService, private matchService: MatchService) { }
  userId: any;
  matchId: any;
  data: any;
  parent: any;
  playerr: any;
  playerId: string = '';
  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap);
    this.data = this.route.snapshot.paramMap.get('playerInfo');
    this.userId = this.route.snapshot.paramMap.get('userId');
    console.log(this.userId);
    this.parent = this.route.snapshot.paramMap.get('parentName');
    if (this.parent === 'matches') {
      let obj = JSON.parse(this.data);
      // console.log(data);
      this.callMe(obj);
    }
    else {
      let play = JSON.parse(this.data);
      this.playerId = play.id;
      this.matchId = play.matchId;
      this.fetchParticipants();
    }
  }

  callMe(obj: any) {
    console.log(obj);
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

  fetchParticipants() {
    this.matchService.getAllParticipants(this.matchId)
      .subscribe(
        (response: any) => {
          this.playerr = response.included.filter((item: any) => item.type === 'participant' && item.id === this.playerId);
          console.log(this.playerr[0]);
          this.callMe(this.playerr[0]);
          // console.log(this.POSTS);
        });
  }

  navigateTo() {
    this.addFavPlayer();
    this.router.navigate(['favourite-players'])
  }

  addFavPlayer() {
    let obj = JSON.parse(this.data);
    this.playerService.addFavPlayer(new Player(obj.id, obj.attributes.stats.name, obj.attributes.stats.kills, this.matchId, this.userId)).subscribe((response: any) => {
      console.log(response);
    });
  }
}
