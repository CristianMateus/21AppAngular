import { Injectable } from "@angular/core";
import { Player } from "../../models/player";
import { Observable } from "rxjs";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";

// Firebase

@Injectable({
  providedIn: "root"
})
export class PlayerService {
  // Forms:
  formData: Player;
  // Player list
  playerList: AngularFireList<any>;
  // Selected product
  // selectedPlayer: Player = new Player();

  constructor(
    private db: AngularFireDatabase,
    private firestore: AngularFirestore
  ) {
    this.getPlayers();
  }

  getPlayers() {
    return this.playerList = this.db.list("players");
  }

  insertPlayer(player: Player) {
    this.playerList.push({
      age: player.age,
      photo: player.photo,
      gamesTied: player.gamesTied,
      gamesWon: player.gamesWon,
      gamesLost: player.gamesLost,
      gamesPlayed: player.gamesPlayed,
      position: player.position
    });
  }

  updatePlayer(player: Player) {
    this.playerList.update(player.$key, {
      age: player.age,
      photo: player.photo,
      gamesTied: player.gamesTied,
      gamesWon: player.gamesWon,
      gamesLost: player.gamesLost,
      gamesPlayed: player.gamesPlayed,
      position: player.position
    })
  }

  deletePlayer($key: string){
    this.playerList.remove($key);
  }
}
