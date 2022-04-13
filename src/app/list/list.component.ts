import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../services/match-service.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];
  responsiveP: boolean = true;
  loading: boolean = true;

  @Input() parentComp: string = '';
  @Input() id: string = '';

  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit(): void {
    this.callMeBefore();
  }

  // navigateTo() {
  //   this.router.navigate(['player-details']);
  // }

  fetchFavouriteMatches() {
    this.matchService.getAllFavouriteMatches("23451789")
      .subscribe(
        (response: any) => {
          this.loading = false;
          this.POSTS = response;
          console.log(response);
        });
  }

  fetchTournaments() {
    this.matchService.getAllTournaments()
      .subscribe(
        (response: any) => {
          this.loading = false;
          this.POSTS = response.data;
          // console.log(response);
        });
  }

  fetchMatches() {
    this.matchService.getAllMatchesInTournament(this.id).subscribe((response: any) => {
      this.loading = false;
      this.POSTS = response.included;
      // console.log(this.POSTS);
    });
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.callMeBefore();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.callMeBefore();
  }

  callMeBefore() {
    if (this.parentComp === 'favourite-matches')
      this.fetchFavouriteMatches();
    else if (this.parentComp === 'tournaments')
      this.fetchTournaments();
    else
      this.fetchMatches();
  }
}
