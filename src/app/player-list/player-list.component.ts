import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../services/match-service.service';
import { PostService } from '../services/post.service';

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

  @Input("id") matchId: any;

  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit(): void {
    this.fetchParticipants();
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

}
