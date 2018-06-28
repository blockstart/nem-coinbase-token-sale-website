import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseContainerComponent } from './purchase-container.component';

describe('PurchaseContainerComponent', () => {
  let component: PurchaseContainerComponent;
  let fixture: ComponentFixture<PurchaseContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
