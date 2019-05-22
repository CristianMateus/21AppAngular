import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/services/player/player.service';

@Component({
  selector: 'app-player-home',
  templateUrl: './player-home.component.html',
  styleUrls: ['./player-home.component.scss']
})
export class PlayerHomeComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  allPlayers:any;

  ngOnInit() {
    // this.playerService.getAllPlayers().subscribe(result => {
    //   console.log(result);
      
    // });
    this.playerService.getAllPlayers().subscribe(actionArray => {
      console.log(actionArray);
      
    });
  }

}
