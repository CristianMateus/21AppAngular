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
  listPlayers: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase,
    private firestore: AngularFirestore
  ) {
    this.getPlayers();
  }

  getPlayers() : AngularFireList<any> {
    return this.listPlayers = this.db.list("jugadores");
  }

}
