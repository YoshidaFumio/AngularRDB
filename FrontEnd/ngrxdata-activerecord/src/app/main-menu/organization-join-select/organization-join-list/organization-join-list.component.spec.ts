import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationJoinListComponent } from './organization-join-list.component';

describe('OrganizationJoinListComponent', () => {
  let component: OrganizationJoinListComponent;
  let fixture: ComponentFixture<OrganizationJoinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationJoinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationJoinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
