import { TestBed } from '@angular/core/testing';

import { FlipkartserviceService } from './flipkartservice.service';

describe('FlipkartserviceService', () => {
  let service: FlipkartserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
