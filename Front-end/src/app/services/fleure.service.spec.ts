import { TestBed } from '@angular/core/testing';

import { FleureService } from './fleure.service';

describe('FleureService', () => {
  let service: FleureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
