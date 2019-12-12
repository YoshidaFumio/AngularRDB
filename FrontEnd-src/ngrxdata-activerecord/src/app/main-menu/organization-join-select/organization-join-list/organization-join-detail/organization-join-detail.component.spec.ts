import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationJoinDetailComponent } from './organization-join-detail.component';

describe('OrganizationJoinDetailComponent', () => {
  let component: OrganizationJoinDetailComponent;
  let fixture: ComponentFixture<OrganizationJoinDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationJoinDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationJoinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
