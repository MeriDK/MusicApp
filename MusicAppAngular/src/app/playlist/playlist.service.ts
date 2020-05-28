import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class PlaylistService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }
  getPlaylist(id) {
    return this.http.get('http://127.0.0.1:8000/playlist/' + id + '/',
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access'))});
  }
  getSongs(id) {
    return this.http.get('http://127.0.0.1:8000/song/?playlist=' + id,
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access'))});
  }
}
