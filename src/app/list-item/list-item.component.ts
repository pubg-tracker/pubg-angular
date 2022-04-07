import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() id: string = 'eu-pslss22'
  @Input() date: string = '2022-03-28 T 17:38:40 Z';
  constructor() { }

  ngOnInit(): void {
  }

}
