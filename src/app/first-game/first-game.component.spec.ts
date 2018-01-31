import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGameComponent } from './first-game.component';

describe('FirstGameComponent', () => {
  let component: FirstGameComponent;
  let fixture: ComponentFixture<FirstGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
