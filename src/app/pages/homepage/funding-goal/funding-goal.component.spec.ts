import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingGoalComponent } from './funding-goal.component';

describe('FundingGoalComponent', () => {
  let component: FundingGoalComponent;
  let fixture: ComponentFixture<FundingGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
