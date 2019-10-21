import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextTravelComponent } from './next-travel.component';

describe('NextTravelComponent', () => {
  let component: NextTravelComponent;
  let fixture: ComponentFixture<NextTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
