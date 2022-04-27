import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  parentName: string = 'matches';
  tournamentId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tournamentId = this.route.snapshot.paramMap.get('tournamentId');
  }

}
