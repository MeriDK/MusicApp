import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { PlaylistService } from './playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.sass'],
  providers: [PlaylistService]
})
export class PlaylistComponent implements OnInit {

  @Input() playlistId;

  songs: any;
  playlist: any = {
    name: '',
    description: ''
  };
  id: any;

  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.playlistService.getPlaylist(this.id)
      .pipe(first())
      .subscribe(
        response => {
          this.playlist = response;
        },
        error => {
          alert(error.message);
        }
      );
    this.playlistService.getSongs(this.id)
      .pipe(first())
      .subscribe(
        response => {
          this.songs = response;
        },
        error => {
          alert(error.message);
        }
      );
  }

}
