import { TestBed } from '@angular/core/testing';

import { PlaylistModel } from '../playlistModel';
import { HomeService } from './home.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('HomeService', () => {
  let service: HomeService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const homeUrl = 'http://127.0.0.1:8000/playlist/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HomeService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getPlaylists', () => {
    let expectedData: PlaylistModel[];

    beforeEach(() => {
      expectedData = [
        { id: 1, user: 'MeriDK', type: '0', name: 'Hobo of Mitchelstown', description: 'Сингл • The O\'Reillys and the Paddyhats • 2020'},
        { id: 2, user: 'MeriDK', type: '0', name: 'Sign of the Fighter', description: 'Альбом • The O\'Reillys and the Paddyhats • 2017'}
      ] as PlaylistModel[];
    });

    it('should return expected playlists by calling once', () => {
      service.getPlaylists().subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected playlists'),
        fail
      );

      const req = httpTestingController.expectOne(homeUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedData);
    });

    it('should be OK returning no playlists', () => {
      service.getPlaylists().subscribe(
        data => expect(data.length).toEqual(0, 'should have empty playlists array'),
        fail
      );

      const req = httpTestingController.expectOne(homeUrl);
      req.flush([]);
    });

    it('should return expected playlists when called multiple times', () => {
      service.getPlaylists().subscribe();
      service.getPlaylists().subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected playlists'),
        fail
      );

      const requests = httpTestingController.match(homeUrl);
      expect(requests.length).toEqual(2, 'calls to getPlaylists()');

      requests[0].flush([]);
      requests[1].flush(expectedData);
    });
  });
});
