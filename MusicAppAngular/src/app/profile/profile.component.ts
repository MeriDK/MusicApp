import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass', '../login/login.component.sass']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor() { }

  ngOnInit(): void {
    fetch('http://127.0.0.1:8000/user/1/')
    .then(res => res.json())
    .then((out) => {
      this.profile = out;
    }).catch(err => console.log(err));
  }

}
