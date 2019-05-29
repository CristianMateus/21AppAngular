import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

// Own Imports
import { PlayerPositionList } from "src/app/shared/models/enumLists/player-position-list";
import { PlayerPositions } from "src/app/shared/enums/playerPositions.enum";
import { AgesList } from "src/app/shared/mockups/ages-list";
import { Player } from "src/app/shared/models/player";

// Services
import { PlayerService } from "src/app/shared/services/player/player.service";
import { Router } from '@angular/router';

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
  playerNames: string;
  playerSurnames: string;
  age: number;
  photo: string;
  position: string;

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit() {
    this.getListOfPositions();
    this.getListOfAges();
    this.createPlayerTemplate();
  }

  createPlayerTemplate() {
    this.playerNames = "";
    this.playerSurnames = "";
    this.age = 15;
    this.position = PlayerPositions.Arquero;
    this.photo = "https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/11/11/Recortada/img_fmartinez_20181109-171424_imagenes_lv_getty_gettyimages-1053237084_4_5_2811569930-kfgH-U452803143087cNB-992x558@LaVanguardia-Web.jpg";
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
      this.playerNames,
      this.playerSurnames,
      this.photo,
      gamesTied,
      gamesWon,
      gamesLost,
      gamesPlayed,
      this.position
    );
    console.log(savedPlayer);

    this.playerService.insertPlayer(savedPlayer);
    this.router.navigateByUrl('/jugadores');

  }
}
