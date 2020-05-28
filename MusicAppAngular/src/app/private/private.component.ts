import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.sass', '../home/home.component.sass']
})
export class PrivateComponent implements OnInit {

  playlists = [];

  constructor() { }

  ngOnInit(): void {
    fetch('http://127.0.0.1:8000/playlist/?type=1')
      .then(res => res.json())
      .then((out) => {
          this.playlists = out;
      }).catch(err => console.log(err));
  }

}
