import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CachePurchaseComponentComponent } from './cache-purchase-component.component';

describe('CachePurchaseComponentComponent', () => {
  let component: CachePurchaseComponentComponent;
  let fixture: ComponentFixture<CachePurchaseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CachePurchaseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CachePurchaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
