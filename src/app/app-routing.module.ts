import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { PublicProfileComponent } from './modules/player-profile/public-profile/public-profile.component';
import { PlayerHomeComponent } from './modules/player/player-home/player-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'perfilPublico', component: PublicProfileComponent  },
  { path: 'jugadores', component: PlayerHomeComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
