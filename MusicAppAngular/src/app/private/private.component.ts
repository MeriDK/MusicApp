import { Component, OnInit } from '@angular/core';
import { PrivateService } from './private.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.sass', '../home/home.component.sass'],
  providers: [PrivateService]
})
export class PrivateComponent implements OnInit {

  playlists: any;

  constructor(
    private privateService: PrivateService
  ) { }

  ngOnInit(): void {
    this.privateService.getPlaylists()
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
