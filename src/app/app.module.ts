import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { PlayerComponent } from './player/player.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentScreenComponent } from './content-screen/content-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    PlayerComponent,
    NavbarComponent,
    ContentScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
