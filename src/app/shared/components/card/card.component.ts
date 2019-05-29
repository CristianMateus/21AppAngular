import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() names: string;
  @Input() surnames: string;
  @Input() age: string;
  @Input() gamesLost: number;
  @Input() gamesPlayed: number;
  @Input() gamesTied: number;
  @Input() gamesWon: number;
  @Input() photo: string;
  @Input() position: string;


  constructor() { }

  ngOnInit() {
  }

}
