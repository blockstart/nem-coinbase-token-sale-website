import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoRedirectComponent } from './promo-redirect.component';

describe('PromoRedirectComponent', () => {
  let component: PromoRedirectComponent;
  let fixture: ComponentFixture<PromoRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
