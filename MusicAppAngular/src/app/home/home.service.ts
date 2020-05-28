import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class HomeService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }
  getPlaylists() {
    return this.http.get('http://127.0.0.1:8000/playlist/',
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access'))});
  }
}
