import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() id: string = '';
  @Input() date: string = '';
  @Input() parent: string = '';

  iconType: string = 'open_in_new';

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.parent === 'favourite-matches') {
      this.iconType = 'delete';
    }
    else if (this.parent === 'matches') {
      this.iconType = 'add';
    }
  }

  navigateTo() {
    if (this.parent === 'tournaments') {
      console.log(this.id);
      this.router.navigate(['matches', { tournamentId: this.id }]);
    }
    else if (this.parent === 'matches') {
      this.router.navigate(['favourite-matches'])
    }
  }

  goTo() {
    if (this.parent === 'matches' || this.parent === 'favourite-matches') {
      this.router.navigate(['match-participants']);
    } else if (this.parent === 'tournaments') {
      this.router.navigate(['matches', { tournamentId: this.id }]);
    }
  }

}
