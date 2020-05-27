import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.sass', '../home/home.component.sass']
})
export class PublicComponent implements OnInit {

  playlists = [];

  constructor() { }

  ngOnInit(): void {
    fetch('http://127.0.0.1:8000/playlist/?type=0')
      .then(res => res.json())
      .then((out) => {
          this.playlists = out;
      }).catch(err => console.log(err));
  }

}
