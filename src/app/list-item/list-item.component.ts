import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from '../models/match';
import { User } from '../models/user';
import { MatchService } from '../services/match-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() id: string = '';
  @Input() date: string = '';
  @Input() parent: string = '';
  @Output() populate = new EventEmitter();

  iconType: string = 'open_in_new';

  user: User = new User('', '', '', '');
  constructor(private router: Router, private userService: UserServiceService, private matchService: MatchService) { }

  ngOnInit(): void {
    if (this.parent === 'favourite-matches') {
      this.iconType = 'delete';
    }
    else if (this.parent === 'matches') {
      this.iconType = 'add';
    }

    this.userService.getUser().subscribe((data: User) => {
      // console.log(data);
      this.user = data;
    })
  }

  navigateTo() {
    if (this.parent === 'tournaments') {
      // console.log(this.id);
      this.router.navigate(['matches', { tournamentId: this.id }]);
    }
    else if (this.parent === 'matches') {
      console.log(this.user.userId);
      this.matchService.addToFav(new Match(this.id, this.date, this.user.userId)).subscribe((data: any) => {
        console.log(data);
      });
      this.router.navigate(['favourite-matches']);
    }
    else {
      this.matchService.deleteFromFav(this.id).subscribe((data: any) => {
        console.log("hello", data);
        this.populate.emit();
        // this.router.navigate(['favourite-matches']);
      })
    }
  }

  goTo() {
    if (this.parent === 'matches' || this.parent === 'favourite-matches') {
      this.router.navigate(['match-participants', { matchId: this.id }]);
    } else if (this.parent === 'tournaments') {
      this.router.navigate(['matches', { tournamentId: this.id }]);
    }
  }

}
