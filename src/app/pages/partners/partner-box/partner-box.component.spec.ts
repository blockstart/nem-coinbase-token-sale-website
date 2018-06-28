import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerBoxComponent } from './partner-box.component';

describe('PartnerBoxComponent', () => {
  let component: PartnerBoxComponent;
  let fixture: ComponentFixture<PartnerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
