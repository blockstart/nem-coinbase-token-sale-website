import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightInfoBoxComponent } from './right-info-box.component';

describe('RightInfoBoxComponent', () => {
  let component: RightInfoBoxComponent;
  let fixture: ComponentFixture<RightInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
