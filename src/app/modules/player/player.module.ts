import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerHomeComponent } from './player-home/player-home.component';
import { PlayerAdminComponent } from './player-admin/player-admin.component';
import { AddPlayerComponent } from './player-admin/add-player/add-player.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@NgModule({
  declarations: [PlayerHomeComponent, PlayerAdminComponent, AddPlayerComponent, CardComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PlayerModule { }
