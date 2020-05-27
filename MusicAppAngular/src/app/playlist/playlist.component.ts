import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.sass']
})
export class PlaylistComponent implements OnInit {


  songs = [];
  playlist: any;

  constructor() { }

  ngOnInit(): void {
    fetch('http://127.0.0.1:8000/playlist/2/')
      .then(res => res.json())
      .then((out) => {
        this.playlist = out;
      }).catch(err => console.log(err));

    fetch('http://127.0.0.1:8000/song/?playlist=2')
      .then(res => res.json())
      .then((out) => {
        this.songs = out;
      }).catch(err => console.log(err));
  }

}
