import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNewentryComponent } from './employee-newentry.component';

describe('EmployeeNewentryComponent', () => {
  let component: EmployeeNewentryComponent;
  let fixture: ComponentFixture<EmployeeNewentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeNewentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNewentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
