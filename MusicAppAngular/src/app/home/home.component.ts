import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {

  playlists: any;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getPlaylists()
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
