import { Component, OnInit } from '@angular/core';
import { SongDataService } from '../services/song-data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  back(){
this._data.setView("song-list");
  }
  constructor(public _data:SongDataService) { }

  ngOnInit() {
  }

}
