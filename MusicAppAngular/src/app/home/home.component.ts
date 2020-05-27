import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  playlists = [];

  constructor() { }

  ngOnInit(): void {
    fetch('http://127.0.0.1:8000/playlist/')
      .then(res => res.json())
      .then((out) => {
          this.playlists = out;
      }).catch(err => console.log(err));
  }

}
