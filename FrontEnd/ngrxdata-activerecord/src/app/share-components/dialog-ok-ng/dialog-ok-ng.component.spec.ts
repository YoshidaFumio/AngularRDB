import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOkNgComponent } from './dialog-ok-ng.component';

describe('DialogOkNgComponent', () => {
  let component: DialogOkNgComponent;
  let fixture: ComponentFixture<DialogOkNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOkNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOkNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
