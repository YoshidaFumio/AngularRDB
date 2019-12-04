import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchNewentryComponent } from './branch-newentry.component';

describe('BranchNewentryComponent', () => {
  let component: BranchNewentryComponent;
  let fixture: ComponentFixture<BranchNewentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchNewentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchNewentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
