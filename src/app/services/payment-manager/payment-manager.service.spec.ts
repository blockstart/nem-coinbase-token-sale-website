import { TestBed, inject } from '@angular/core/testing';

import { PaymentManagerService } from './payment-manager.service';

describe('PaymentManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentManagerService]
    });
  });

  it('should be created', inject([PaymentManagerService], (service: PaymentManagerService) => {
    expect(service).toBeTruthy();
  }));
});
