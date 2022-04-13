import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../models/player';
import { User } from '../models/user';
import { MatchService } from '../services/match-service.service';
import { PlayerService } from '../services/player-service.service';
// import { PostService } from '../services/post.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes = [3, 6, 9, 12];
  responsiveP: boolean = true;
  loading: boolean = true;

  playerName: string = 'johnwick';
  playerID: string = '007';
  iconType: string = '';

  @Input() parent: string = '';
  @Input("id") matchId: any;
  user: User = new User('', '', '', '');
  constructor(private router: Router, private userService: UserServiceService, private matchService: MatchService, private playerService: PlayerService) { }

  ngOnInit(): void {

    this.userService.getUser().subscribe((data: User) => {
      // console.log(data);
      this.user = data;
    })
    if (this.parent === 'favourite-matches') {
      this.iconType = 'delete';
    } else if (this.parent === 'match-participants') {
      this.iconType = 'add';
      this.fetchParticipants();
    }
    else if (this.parent === 'global-players') {
      this.iconType = 'add';
      this.fetchGlobalPlayers();
    }
    else {
      this.iconType = 'delete';
      this.fetchFavPlayers();
    }
  }

  navigateTo(player: any) {
    // console.log(player);
    this.router.navigate(['player-details', { playerInfo: JSON.stringify(player) }]);
  }

  fetchParticipants() {
    this.matchService.getAllParticipants(this.matchId)
      .subscribe(
        (response: any) => {
          this.loading = false;
          this.POSTS = response.included.filter((item: any) => item.type === 'participant');
          // console.log(this.POSTS);
        });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchParticipants();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchParticipants();
  }

  fetchGlobalPlayers() {
    this.playerService.getGlobalPlayers().subscribe((response: any) => {
      this.loading = false;
      this.POSTS = response;
    })
  }

  addFavPlayer(playerId: string, name: string, kills: string) {
    this.playerService.addFavPlayer(new Player(playerId, name, kills, this.matchId, this.user.userId)).subscribe((response: any) => {
      console.log(response);
    });
  }

  deleteFavPlayer(playerId: string) {
    this.playerService.deleteFavPlayer(playerId).subscribe((response: any) => {
      console.log(response);
    })
  }

  doAction(playerId: string, name: string, kills: string) {
    if (this.parent === 'global-players' || this.parent === 'match-participants') {
      this.addFavPlayer(playerId, name, kills);
    } else {
      this.deleteFavPlayer(playerId);
    }
  }

  fetchFavPlayers() {
    this.playerService.getFavPlayer(this.user.userId).subscribe((response: any) => {
      this.loading = false;
      this.POSTS = response;
    })
  }

}
