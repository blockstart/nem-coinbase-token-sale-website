import { TestBed, inject } from '@angular/core/testing';

import { VipVerificationService } from './vip-verification.service';

describe('VipVerificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VipVerificationService]
    });
  });

  it('should be created', inject([VipVerificationService], (service: VipVerificationService) => {
    expect(service).toBeTruthy();
  }));
});
