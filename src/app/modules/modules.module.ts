import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HomeModule } from './home/home.module';
import { PlayerProfileModule } from './player-profile/player-profile.module';
import { PlayerModule } from './player/player.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    // Own Modules:
    HomeModule,
    PlayerProfileModule,
    PlayerModule
  ]
})
export class ModulesModule { }
