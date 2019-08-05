import { Component, OnInit } from '@angular/core';
import { SongDataService } from '../services/song-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  playSong(i:number):void{
    this._data.playSong(i);
  }
  constructor(public _data:SongDataService) { }

  ngOnInit() {
  }

}
