import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftInfoBoxComponent } from './left-info-box.component';

describe('LeftInfoBoxComponent', () => {
  let component: LeftInfoBoxComponent;
  let fixture: ComponentFixture<LeftInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
