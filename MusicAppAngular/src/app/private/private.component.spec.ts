import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateComponent } from './private.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NavBarComponent} from '../nav-bar/nav-bar.component';

describe('PrivateComponent', () => {
  let component: PrivateComponent;
  let fixture: ComponentFixture<PrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PrivateComponent, NavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
