import { TestBed } from '@angular/core/testing';

import { ErrorDetectService } from './error-detect.service';

describe('ErrorDetectService', () => {
  let service: ErrorDetectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorDetectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
