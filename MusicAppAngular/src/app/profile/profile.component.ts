import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { first } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass', '../login/login.component.sass'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.profileService.getProfile()
      .pipe(first())
      .subscribe(
        response => {
          this.profile = response;
        },
        error => {
          alert(error.message);
        }
      );
  }

  logOut(): void {
    this.profileService.logOut();
    this.router.navigate(['/']);
  }

  saveProfile(): void {
    const usernameEdit = document.getElementById('username_edit');
    const emailEdit = document.getElementById('email_edit');
    const data = {
      username: usernameEdit.innerHTML,
      email: emailEdit.innerHTML
    };
    this.profileService.patchProfile(data)
      .pipe(first())
      .subscribe(
        response => {
          this.profile = response;
        },
        error => {
          alert(error.message);
        }
      );
  }
}
