import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class ProfileService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }
  getProfile() {
    return this.http.get('http://127.0.0.1:8000/user/',
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access'))});
  }
  patchProfile(data) {
    return this.http.patch('http://127.0.0.1:8000/user/', data,
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access'))});
  }
  logOut() {
    this.cookieService.set('access', '');
    this.cookieService.set('refresh', '');
  }
}
