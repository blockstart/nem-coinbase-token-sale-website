import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyContainerComponent } from './buy-container.component';

describe('BuyContainerComponent', () => {
  let component: BuyContainerComponent;
  let fixture: ComponentFixture<BuyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
