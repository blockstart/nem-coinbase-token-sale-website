import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSummaryComponentComponent } from './purchase-summary-component.component';

describe('PurchaseSummaryComponentComponent', () => {
  let component: PurchaseSummaryComponentComponent;
  let fixture: ComponentFixture<PurchaseSummaryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseSummaryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseSummaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
