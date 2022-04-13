import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-participants',
  templateUrl: './match-participants.component.html',
  styleUrls: ['./match-participants.component.css']
})
export class MatchParticipantsComponent implements OnInit {

  matchId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.matchId = this.route.snapshot.paramMap.get('matchId');
  }

}
