import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {Observable} from "rxjs";
import {PlaylistModel} from "../playlistModel";


@Injectable()
export class PublicService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }
  getPlaylists(): Observable<PlaylistModel[]> {
    return this.http.get<PlaylistModel[]>('http://127.0.0.1:8000/playlist/?type=0',
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access'))});
  }
}
