import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalBodyComponent } from './legal-body.component';

describe('LookupBodyComponent', () => {
  let component: LegalBodyComponent;
  let fixture: ComponentFixture<LegalBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
