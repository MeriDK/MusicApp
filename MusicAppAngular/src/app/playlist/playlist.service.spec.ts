import { TestBed } from '@angular/core/testing';

import { SongModel } from '../songModel';
import { PlaylistService } from './playlist.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import {UserModel} from '../userModel';
import {PlaylistModel} from '../playlistModel';

describe('PlaylistService', () => {
  let service: PlaylistService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const getSongsUrl = 'http://127.0.0.1:8000/song/?playlist=4';
  const getPlaylistUrl = 'http://127.0.0.1:8000/playlist/4/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaylistService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PlaylistService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getSongs', () => {
    let expectedData: SongModel[];

    beforeEach(() => {
      expectedData = [
        { id: 32, name: 'I Met Up With The King', artist: 'First Aid Kit', duration: '2:49', playlist: 4 },
        { id: 33, name: 'Hard Believer', artist: 'First Aid Kit', duration: '3:46', playlist: 4 }
      ] as SongModel[];
    });

    it('should return expected songs by calling once', () => {
      service.getSongs(4).subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected songs'),
        fail
      );

      const req = httpTestingController.expectOne(getSongsUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedData);
    });

    it('should be OK returning no songs', () => {
      service.getSongs(4).subscribe(
        data => expect(data.length).toEqual(0, 'should have empty songs array'),
        fail
      );

      const req = httpTestingController.expectOne(getSongsUrl);
      req.flush([]);
    });

    it('should return expected songs when called multiple times', () => {
      service.getSongs(4).subscribe();
      service.getSongs(4).subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected songs'),
        fail
      );

      const requests = httpTestingController.match(getSongsUrl);
      expect(requests.length).toEqual(2, 'calls to getSongs()');

      requests[0].flush([]);
      requests[1].flush(expectedData);
    });
  });

  describe('#getPlaylist', () => {
    let expectedData: PlaylistModel;

    beforeEach(() => {
      expectedData = { id: 4, user: 'MeriDK', type: '1', name: 'I Met Up With The King',
        description: 'Мініальбом • First Aid Kit • 2010' } as PlaylistModel;
    });

    it('should return expected playlist by calling once', () => {
      service.getPlaylist(4).subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected playlist'),
        fail
      );

      const req = httpTestingController.expectOne(getPlaylistUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedData);
    });
  });
});
