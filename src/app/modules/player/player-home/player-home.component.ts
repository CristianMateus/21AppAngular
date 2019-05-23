import { Component, OnInit } from "@angular/core";
import { PlayerService } from "src/app/shared/services/player/player.service";
// Firebase
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
// Models
import { Player } from "src/app/shared/models/player";

@Component({
  selector: "app-player-home",
  templateUrl: "./player-home.component.html",
  styleUrls: ["./player-home.component.scss"]
})
export class PlayerHomeComponent implements OnInit {
  constructor(private playerService: PlayerService) {}

  allPlayers: any[];

  ngOnInit() {
    this.getPlayers();
    console.log(this.allPlayers);
  }
    
  getPlayers(){
    this.playerService.getPlayers().snapshotChanges().subscribe(item=>{
      this.allPlayers = [];
      item.forEach(element => {
        this.allPlayers.push(element);
      })
    })
  }
}
