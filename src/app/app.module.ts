// Basic imports:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase:
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

// Routing:
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Own modules:
import { ModulesModule } from './modules/modules.module';
import { PlayerService } from './shared/services/player/player.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule,
    // Own Modules:
    ModulesModule,
    

  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
