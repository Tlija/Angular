import { TestBed } from '@angular/core/testing';

import { SherServesService } from './sher-serves.service';

describe('SherServesService', () => {
  let service: SherServesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SherServesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
