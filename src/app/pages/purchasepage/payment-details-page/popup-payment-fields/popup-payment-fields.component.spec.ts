import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPaymentFieldsComponent } from './popup-payment-fields.component';

describe('PopupPaymentFieldsComponent', () => {
  let component: PopupPaymentFieldsComponent;
  let fixture: ComponentFixture<PopupPaymentFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPaymentFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPaymentFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
