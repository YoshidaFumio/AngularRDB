import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTestComponent } from './transaction-test.component';

describe('TransactionTestComponent', () => {
  let component: TransactionTestComponent;
  let fixture: ComponentFixture<TransactionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
