import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicComponent } from './public.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NavBarComponent} from "../nav-bar/nav-bar.component";

describe('PublicComponent', () => {
  let component: PublicComponent;
  let fixture: ComponentFixture<PublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PublicComponent, NavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
