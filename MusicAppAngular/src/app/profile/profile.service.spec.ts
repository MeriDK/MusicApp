import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../userModel';
import {CookieService} from "ngx-cookie-service";

describe('ProfileService', () => {
  let service: ProfileService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  let cookieService: CookieService;
  const homeUrl = 'http://127.0.0.1:8000/user/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileService, CookieService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProfileService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    cookieService = TestBed.inject(CookieService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getProfile', () => {
    let expectedData: UserModel;

    beforeEach(() => {
      expectedData = {
        email: 'email@gmail.com',
        username: 'username',
        password: 'qwerty1234567890'
      } as UserModel;
    });

    it('should return expected user by calling once', () => {
      service.getProfile().subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected tokens'),
        fail
      );

      const req = httpTestingController.expectOne(homeUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedData);
    });
  });

  describe('#patchProfile', () => {
    let expectedData: UserModel;

    beforeEach(() => {
      expectedData = {
        email: 'email@gmail.com',
        username: 'username',
        password: 'qwerty1234567890'
      } as UserModel;
    });

    it('should return expected user by calling once', () => {
      service.patchProfile({username: 'new username'}).subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected tokens'),
        fail
      );

      const req = httpTestingController.expectOne(homeUrl);
      expect(req.request.method).toEqual('PATCH');

      req.flush(expectedData);
    });

    it('should set cookie to null', () => {
      service.logOut();
      expect(cookieService.get('access')).toBe('');
      expect(cookieService.get('refresh')).toBe('');
    });
  });
});
