import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerHomeComponent } from './player-home/player-home.component';
import { PlayerAdminComponent } from './player-admin/player-admin.component';

@NgModule({
  declarations: [PlayerHomeComponent, PlayerAdminComponent],
  imports: [
    CommonModule
  ]
})
export class PlayerModule { }
