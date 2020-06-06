import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {PlaylistModel} from '../playlistModel';
import {HomeService} from './home.service';
import {Observable, of} from 'rxjs';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NavBarComponent} from "../nav-bar/nav-bar.component";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const testData: PlaylistModel[] = [
    { id: 1, user: 'MeriDK', type: '0', name: 'Hobo of Mitchelstown', description: 'Сингл • The O\'Reillys and the Paddyhats • 2020'},
    { id: 2, user: 'MeriDK', type: '0', name: 'Sign of the Fighter', description: 'Альбом • The O\'Reillys and the Paddyhats • 2017'}
  ];

  class MockHomeService extends HomeService {
    getPlaylists(): Observable<PlaylistModel[]> {
      return of(testData);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ HomeComponent, NavBarComponent ],
      providers: [
        { provide: HomeService, useValue: MockHomeService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
