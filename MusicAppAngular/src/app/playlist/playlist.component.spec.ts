import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistComponent } from './playlist.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {SongModel} from "../songModel";
import {PlaylistService} from "./playlist.service";
import {of} from "rxjs";

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;
  let service: PlaylistService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ PlaylistComponent, NavBarComponent ],
      providers: [PlaylistService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(PlaylistService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSongs and set list of songs', () => {
    const response: SongModel[] = [];
    spyOn(service, 'getSongs').and.returnValue(of(response));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.songs).toEqual(response);
  });
});
