import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { PlaylistComponent } from './playlist.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {SongModel} from '../songModel';
import {PlaylistService} from './playlist.service';
import {of} from 'rxjs';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;
  let serviceSpy: jasmine.SpyObj<PlaylistService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('PlaylistService', ['getSongs', 'getPlaylists']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ PlaylistComponent, NavBarComponent ],
      providers: [{ provide: PlaylistService, useValue: spy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    serviceSpy = TestBed.inject(PlaylistService) as jasmine.SpyObj<PlaylistService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should songs be undefined', () => {
    expect(component.songs).toBeUndefined();
  });

  it('should return songs', () => {
    const testData = of([]);
    serviceSpy.getSongs.and.returnValue(testData);
    expect(serviceSpy.getSongs.calls.count()).toBe(0, 'spy method was called once');
  });

  it('should set playlist to povtorka', () => {
    component.setPlaylist('povtorka', 'privit ia tvoia povtorochka');
    expect(component.playlist.name).toBe('povtorka');
    expect(component.playlist.description).toBe('privit ia tvoia povtorochka');
  });

  it('should be default playlist', () => {
    component.setDefaultPlaylist();
    expect(component.playlist.name).toBe('default name');
    expect(component.playlist.description).toBe('default description');
  });

  it('should set id to 4', () => {
    component.setId(4);
    expect(component.id).toBe(4);
  });
});
