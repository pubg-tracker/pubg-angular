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
  buttonText: string = '';
  successMsg: boolean = false;
  loading: boolean = true;
  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap);

    this.data = this.route.snapshot.paramMap.get('playerInfo');
    this.userId = this.route.snapshot.paramMap.get('userId');
    console.log(this.userId);
    this.parent = this.route.snapshot.paramMap.get('parentName');


    if (this.parent === 'favourite-players')
      this.buttonText = 'Remove from Favourite'
    else
      this.buttonText = 'Add To Favourite';

    if (this.parent === 'matches') {
      this.playerr = JSON.parse(this.data);
      // console.log(data);
      this.callMe(this.playerr);
    } else {
      let play = JSON.parse(this.data);
      this.playerId = play.id;
      console.log(play);
      if (this.parent === 'global-players' || this.parent === 'favourite-players')
        this.matchId = play.matchId;
      else
        this.matchId = this.route.snapshot.paramMap.get('matchId');
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
    this.loading = false;
  }

  fetchParticipants() {
    this.matchService.getAllParticipants(this.matchId)
      .subscribe(
        (response: any) => {
          this.playerr = response.included.filter((item: any) => item.type === 'participant' && item.id === this.playerId);
          // console.log(this.playerr[0]);
          this.callMe(this.playerr[0]);
          // console.log(this.POSTS);
        });
  }

  navigateTo() {
    if (this.parent === 'favourite-players')
      this.deleteFavPlayer();
    else
      this.addFavPlayer();
    // this.router.navigate(['favourite-players'])
  }

  addFavPlayer() {
    // let obj = JSON.parse(this.data);
    console.log('player ', this.player)
    this.playerService.addFavPlayer(new Player(this.player.id, this.player.name, this.player.kills, this.matchId, this.userId)).subscribe((response: any) => {
      console.log(response);
      this.successMsg = true;
    });
  }


  deleteFavPlayer() {
    this.playerService.deleteFavPlayer(this.player.id).subscribe((response: any) => {
      console.log(response);
      this.successMsg = true;
    })
  }
}
