import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDarkComponent } from './products-dark.component';

describe('ProductsDarkComponent', () => {
  let component: ProductsDarkComponent;
  let fixture: ComponentFixture<ProductsDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
