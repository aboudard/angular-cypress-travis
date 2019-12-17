import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import * as fromRoot from '../../state/appreducer';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {mockUserbean} from '../../shared/mock';

describe('NavbarComponent', () => {

  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  // let store: Store<AppState>;
  let badgeSpan: DebugElement;
  let adminLink: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(fromRoot.reducers, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
            strictStateSerializability: true,
            strictActionSerializability: false,
          }
        })
      ],
      declarations: [
        NavbarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    component.user = mockUserbean;

    badgeSpan = fixture.debugElement.query(By.css('span.badge.badge-secondary>span'));

    // store = TestBed.get(Store);
    fixture.detectChanges();

    adminLink = fixture.debugElement.query(By.css('li#adminLink'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a mocked User', () => {
    expect(badgeSpan.nativeElement.innerHTML).toContain('Admin SMA');
  });

  it('should not display admin link', async(() => {
    expect(adminLink).toBeNull();
  }));

});
