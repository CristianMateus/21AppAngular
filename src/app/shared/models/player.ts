export class Player {
  $key: string;
  age: number;
  photo: string;
  gamesTied: number;
  gamesWon: number;
  gamesLost: number;
  gamesPlayed: number;
  position: string;

  constructor(
    age: number,
    photo: string,
    gamesTied: number,
    gamesWon: number,
    gamesLost: number,
    gamesPlayed: number,
    position: string
  ) {
    this.age = age;
    this.photo = photo;
    this.gamesTied = gamesTied;
    this.gamesWon = gamesWon;
    this.gamesLost = gamesLost;
    this.gamesPlayed = gamesPlayed;
    this.position = position;
  }
}
