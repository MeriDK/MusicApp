import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {PlaylistModel} from '../playlistModel';
import {Observable} from 'rxjs';


@Injectable()
export class PrivateService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }
  getPlaylists(): Observable<PlaylistModel[]> {
    return this.http.get<PlaylistModel[]>('http://127.0.0.1:8000/playlist/?type=1',
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access'))});
  }
}
