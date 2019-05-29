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
  playerList: Player[];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getAllPlayers();
  }

  /**
   * Gets all players
   */
  getAllPlayers() {
    this.playerService
      .getPlayers()
      .snapshotChanges()
      .subscribe(item => {
        this.playerList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.playerList.push(x as Player);
          console.log("Todos los jugadores:", this.playerList);
        });
      });
  }
}
