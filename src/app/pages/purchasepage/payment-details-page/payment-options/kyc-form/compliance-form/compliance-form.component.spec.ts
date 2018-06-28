import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceFormComponent } from './compliance-form.component';

describe('ComplianceFormComponent', () => {
  let component: ComplianceFormComponent;
  let fixture: ComponentFixture<ComplianceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
