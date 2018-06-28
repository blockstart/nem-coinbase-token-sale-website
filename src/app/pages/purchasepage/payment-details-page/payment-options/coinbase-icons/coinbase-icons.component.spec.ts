import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinbaseIconsComponent } from './coinbase-icons.component';

describe('CoinbaseIconsComponent', () => {
  let component: CoinbaseIconsComponent;
  let fixture: ComponentFixture<CoinbaseIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinbaseIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinbaseIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
