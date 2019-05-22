import { Injectable } from '@angular/core';
import { Player } from '../../models/player';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

// Firebase

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  // Forms:
  formData: Player;
  listPlayers: Observable<any>

  constructor(db: AngularFireDatabase, private firestore: AngularFirestore) {
    // Lists:
    this.listPlayers = db.list('usuarios').valueChanges();
  }

  // public getAllPlayers(){
  //   return this.listPlayers;
  // }

  getAllPlayers() {
    // return this.firestore.collection('jugadores').get();
    return this.listPlayers;
  }

}
