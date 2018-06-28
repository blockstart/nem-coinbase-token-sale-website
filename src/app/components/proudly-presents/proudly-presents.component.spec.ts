import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudlyPresentsComponent } from './proudly-presents.component';

describe('ProudlyPresentsComponent', () => {
  let component: ProudlyPresentsComponent;
  let fixture: ComponentFixture<ProudlyPresentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProudlyPresentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProudlyPresentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
