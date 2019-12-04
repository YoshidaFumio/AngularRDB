import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationJoinSelectComponent } from './organization-join-select.component';

describe('OrganizationJoinSelectComponent', () => {
  let component: OrganizationJoinSelectComponent;
  let fixture: ComponentFixture<OrganizationJoinSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationJoinSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationJoinSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
