import { Component, OnInit } from '@angular/core';
import { SongDataService } from '../services/song-data.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  playSong(i:number):void{
    this._data.playSong(i);
  }
  constructor(public _data:SongDataService) { }

  ngOnInit() {
  }

}
