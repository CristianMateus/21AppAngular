import { Component, OnInit } from "@angular/core";
import { PlayerService } from "src/app/shared/services/player/player.service";
// Firebase
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
// Models
import { Player } from "src/app/shared/models/player";
import { PlayerPositions } from "src/app/shared/enums/playerPositions.enum";
import { PlayerPositionList } from "src/app/shared/models/enumLists/player-position-list";
import { AgesList } from "src/app/shared/mockups/ages-list";

@Component({
  selector: "app-player-home",
  templateUrl: "./player-home.component.html",
  styleUrls: ["./player-home.component.scss"]
})
export class PlayerHomeComponent implements OnInit {
  //Classes
  playerPositonList: PlayerPositionList = new PlayerPositionList();
  agesListClass: AgesList = new AgesList();
  //Player Position List
  positionList: PlayerPositions[] = [];
  //Ages List
  agesList: Number[] = [];
  // Player List
  playerList: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getListOfPositions();
    this.getListOfAges();
    this.getAllPlayers();
  }

  /**
 * Gets list of positions
 */
  getListOfPositions() {
    this.positionList = this.playerPositonList.getPlayerPositionList();
    // console.log(this.positionList);
  }

  /**
 * Gets list of ages
 */
  getListOfAges() {
    this.agesList = this.agesListClass.getAgesList();
    // console.log(this.agesList);
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
