import { TestBed, fakeAsync, async, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {Location} from '@angular/common';

import { Router } from '@angular/router';

import { appRoutes } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstGameComponent } from './first-game/first-game.component';
import { SecondGameComponent } from './second-game/second-game.component';

describe('AppComponent', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        FirstGameComponent,
        SecondGameComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(
          appRoutes
        )
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));
  it('should create the app', fakeAsync(() => {
    router.navigate(['']);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'The Game!'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('The Game!');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('The Game!');
  }));
});
