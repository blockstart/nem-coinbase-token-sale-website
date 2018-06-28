import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTimerComponent } from './sale-timer.component';

describe('SaleTimerComponent', () => {
  let component: SaleTimerComponent;
  let fixture: ComponentFixture<SaleTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
