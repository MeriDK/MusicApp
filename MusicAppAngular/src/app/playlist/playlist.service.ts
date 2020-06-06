import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {Observable} from "rxjs";
import {SongModel} from "../songModel";


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
  getSongs(id): Observable<SongModel[]> {
    return this.http.get<SongModel[]>('http://127.0.0.1:8000/song/?playlist=' + id,
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access'))});
  }
}
