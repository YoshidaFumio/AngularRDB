import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionNewentryComponent } from './position-newentry.component';

describe('PositionNewentryComponent', () => {
  let component: PositionNewentryComponent;
  let fixture: ComponentFixture<PositionNewentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionNewentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionNewentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
