import { Component, OnInit } from '@angular/core';
import { PublicService } from './public.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.sass', '../home/home.component.sass'],
  providers: [PublicService]
})
export class PublicComponent implements OnInit {

  playlists: any;

  constructor(
    private publicService: PublicService
  ) { }

  ngOnInit(): void {
    this.publicService.getPlaylists()
      .pipe(first())
      .subscribe(
        response => {
          this.playlists = response;
        },
        error => {
          alert(error.message);
        }
      );
  }

}
