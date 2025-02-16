import { TestBed } from '@angular/core/testing';

import { BannersadsService } from './bannersads.service';

describe('BannersadsService', () => {
  let service: BannersadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannersadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
