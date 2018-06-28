import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletPaymentOptionsComponent } from './wallet-payment-options.component';

describe('WalletPaymentOptionsComponent', () => {
  let component: WalletPaymentOptionsComponent;
  let fixture: ComponentFixture<WalletPaymentOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletPaymentOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletPaymentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
