import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationNewentryComponent } from './organization-newentry.component';

describe('OrganizationNewentryComponent', () => {
  let component: OrganizationNewentryComponent;
  let fixture: ComponentFixture<OrganizationNewentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationNewentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationNewentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
