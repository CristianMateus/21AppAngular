import { Component, OnInit } from "@angular/core";

// Models
import { Player } from "src/app/shared/models/player";

// Services
import { PlayerService } from "src/app/shared/services/player/player.service";

@Component({
  selector: "app-player-admin",
  templateUrl: "./player-admin.component.html",
  styleUrls: ["./player-admin.component.scss"]
})
export class PlayerAdminComponent implements OnInit {

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
  }
}
