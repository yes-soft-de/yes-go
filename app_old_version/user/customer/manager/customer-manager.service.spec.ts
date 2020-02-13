import { TestBed } from '@angular/core/testing';

import { CustomerManagerService } from './customer-manager.service';

describe('CustomerManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerManagerService = TestBed.get(CustomerManagerService);
    expect(service).toBeTruthy();
  });
});
