import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperFocusedComponent } from './developer-focused.component';

describe('DeveloperFocusedComponent', () => {
  let component: DeveloperFocusedComponent;
  let fixture: ComponentFixture<DeveloperFocusedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperFocusedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperFocusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
