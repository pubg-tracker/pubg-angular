import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {
  parentName: string = 'tournaments';

  constructor() { }

  ngOnInit(): void {
  }

}
