import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

// Own Imports
import { PlayerPositionList } from "src/app/shared/models/enumLists/player-position-list";
import { PlayerPositions } from "src/app/shared/enums/playerPositions.enum";
import { AgesList } from "src/app/shared/mockups/ages-list";
import { Player } from "src/app/shared/models/player";

// Services
import { PlayerService } from "src/app/shared/services/player/player.service";

@Component({
  selector: "app-add-player",
  templateUrl: "./add-player.component.html",
  styleUrls: ["./add-player.component.scss"]
})
export class AddPlayerComponent implements OnInit {
  //Classes
  playerPositonList: PlayerPositionList = new PlayerPositionList();
  agesListClass: AgesList = new AgesList();
  //Player Position List
  positionList: PlayerPositions[] = [];
  //Ages List
  agesList: Number[] = [];
  //
  newPlayer: {};
  //Player Data
  $key: string;
  age: number;
  photo: string;
  position: string;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getListOfPositions();
    this.getListOfAges();
    this.createPlayerTemplate();
  }

  createPlayerTemplate() {
    this.age = 15;
    this.position = PlayerPositions.Arquero;
    this.photo = "";
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
   * Determines whether age selected on
   * @param val
   */
  onAgeSelected(val: number) {
    this.age = val;
  }

  /**
   * Determines whether position selected on
   * @param val
   */
  onPositionSelected(val: string) {
    this.position = val;
  }

  /**
   * Saves player
   */
  savePlayer() {
    let gamesTied = 0;
    let gamesWon = 0;
    let gamesLost = 0;
    let gamesPlayed = 0;

    const savedPlayer = new Player(
      this.age,
      this.photo,
      gamesTied,
      gamesWon,
      gamesLost,
      gamesPlayed,
      this.position
    );
    console.log(savedPlayer);

    this.playerService.insertPlayer(savedPlayer);
  }
}
