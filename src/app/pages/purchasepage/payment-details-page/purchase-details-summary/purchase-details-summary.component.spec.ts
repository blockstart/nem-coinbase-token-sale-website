import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDetailsSummaryComponent } from './purchase-details-summary.component';

describe('PurchaseDetailsSummaryComponent', () => {
  let component: PurchaseDetailsSummaryComponent;
  let fixture: ComponentFixture<PurchaseDetailsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseDetailsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDetailsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
