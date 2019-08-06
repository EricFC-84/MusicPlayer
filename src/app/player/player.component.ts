import {
  Component,
  OnInit
} from '@angular/core';
import {
  SongDataService
} from '../services/song-data.service';
import {
  stringify
} from '@angular/compiler/src/util';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  audioElement: HTMLAudioElement = < HTMLAudioElement > document.querySelectorAll("audio")[0];

  audioLength: string = "00:00"

  back() {
    this._data.setView("song-list");
  }


  play_pause(): void {

    if (( < HTMLAudioElement > document.querySelectorAll("audio")[0]).paused == true) {
      ( < HTMLAudioElement > document.querySelectorAll("audio")[0]).play();
      ( < HTMLImageElement > document.querySelectorAll("#playBtn")[0]).setAttribute("src", environment.imagenes_prefix + "assets/player/pause.png");

    } else {
      ( < HTMLAudioElement > document.querySelectorAll("audio")[0]).pause();
      ( < HTMLImageElement > document.querySelectorAll("#playBtn")[0]).setAttribute("src", environment.imagenes_prefix + "assets/player/play-button.png");
    }
    this.songLength();
  }

  stop(): void {
    ( < HTMLAudioElement > document.querySelectorAll("audio")[0]).load();
    ( < HTMLImageElement > document.querySelectorAll("#playBtn")[0]).setAttribute("src", environment.imagenes_prefix + "assets/player/play-button.png");
  }

  loop(): void {
    if (( < HTMLAudioElement > document.querySelectorAll("audio")[0]).loop == true) {
      ( < HTMLImageElement > document.querySelectorAll("#loopBtn")[0]).style.filter = "invert(0)";
    } else {
      ( < HTMLImageElement > document.querySelectorAll("#loopBtn")[0]).style.filter = "invert(1)";
    }
    ( < HTMLAudioElement > document.querySelectorAll("audio")[0]).loop = !( < HTMLAudioElement > document.querySelectorAll("audio")[0]).loop;

  }

  next():void{}
  previous():void{}
  shuffle():void{}

  songLength(): void {

    let time = this.formatTime(( < HTMLAudioElement > document.querySelectorAll("audio")[0]).duration);
    // console.log((< HTMLAudioElement >   .duration);
    this.audioLength = time;

  }
  formatTime(seconds: number): string {

    let secondsStr: string = "";
    let minutesStr: string = "";
    let minutes = Math.floor(seconds / 60);

    if (minutes < 10) {
      minutesStr = "0" + minutes;
    } else {
      minutesStr = "" + minutes;
    }

    seconds = Math.floor(seconds % 60);
    if (seconds < 10) {
      secondsStr = "0" + seconds;
    } else {
      secondsStr = "" + seconds;
    }

    return minutesStr + ":" + secondsStr;
  }

  constructor(public _data: SongDataService) {

    let playerButtons:NodeListOf<Element> = document.querySelectorAll(".player-icon");

    for (let i = 0; i < playerButtons.length; i++) {
      let src = playerButtons[i].getAttribute("src");
      src = environment.imagenes_prefix + src;
     playerButtons[i].setAttribute("src", src)      
    }
  }

  ngOnInit() {

  }

  AfterViewChange(){
    console.log("changes")
    this.songLength();

  }

}
