import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDetailsBodyComponent } from './purchase-details-body.component';

describe('PurchaseDetailsBodyComponent', () => {
  let component: PurchaseDetailsBodyComponent;
  let fixture: ComponentFixture<PurchaseDetailsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseDetailsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDetailsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
