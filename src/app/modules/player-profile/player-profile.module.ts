import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';

@NgModule({
  declarations: [PublicProfileComponent, PersonalProfileComponent],
  imports: [
    CommonModule
  ]
})
export class PlayerProfileModule { }
