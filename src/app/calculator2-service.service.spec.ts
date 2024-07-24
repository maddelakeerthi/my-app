import { TestBed } from '@angular/core/testing';

import { Calculator2ServiceService } from './calculator2-service.service';

describe('Calculator2ServiceService', () => {
  let service: Calculator2ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calculator2ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
