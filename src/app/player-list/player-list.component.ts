import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  navigateTo() {
    this.router.navigate(['player-details']);
  }


  fetchPosts(): void {
    this.postService.getAllPosts()
      .subscribe(
        response => {
          this.loading = false;
          this.POSTS = response.results;
          console.log(response);
        });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

}
