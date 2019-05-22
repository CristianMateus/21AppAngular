import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PlayerProfileModule } from './player-profile/player-profile.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Own Modules:
    HomeModule,
    PlayerProfileModule
  ]
})
export class ModulesModule { }
