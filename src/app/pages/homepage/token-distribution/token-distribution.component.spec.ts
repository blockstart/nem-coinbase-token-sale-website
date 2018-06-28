import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenDistributionComponent } from './token-distribution.component';

describe('TokenDistributionComponent', () => {
  let component: TokenDistributionComponent;
  let fixture: ComponentFixture<TokenDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
