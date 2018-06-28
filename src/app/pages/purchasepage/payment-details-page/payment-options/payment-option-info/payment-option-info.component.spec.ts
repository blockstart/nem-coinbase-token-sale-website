import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOptionInfoComponent } from './payment-option-info.component';

describe('PaymentOptionInfoComponent', () => {
  let component: PaymentOptionInfoComponent;
  let fixture: ComponentFixture<PaymentOptionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentOptionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOptionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
