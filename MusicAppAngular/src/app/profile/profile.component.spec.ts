import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {ProfileService} from "./profile.service";
import {CookieService} from "ngx-cookie-service";

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let cookieService: CookieService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ ProfileComponent, NavBarComponent ],
      providers: [ CookieService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cookieService = TestBed.inject(CookieService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set cookie to null when logOut', () => {
    component.logOut();
    expect(cookieService.get('access')).toBe('');
    expect(cookieService.get('refresh')).toBe('');
  });

  it('should have defined username and email after saveProfile', () => {
    component.saveProfile();
    expect(component.profile.username).toBeDefined();
    expect(component.profile.email).toBeDefined();
  });
});
