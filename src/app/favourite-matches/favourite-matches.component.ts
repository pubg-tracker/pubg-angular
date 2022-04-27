import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-matches',
  templateUrl: './favourite-matches.component.html',
  styleUrls: ['./favourite-matches.component.css']
})
export class FavouriteMatchesComponent implements OnInit {
  parentName: string = 'favourite-matches'
  constructor() { }

  ngOnInit(): void {
  }

}
