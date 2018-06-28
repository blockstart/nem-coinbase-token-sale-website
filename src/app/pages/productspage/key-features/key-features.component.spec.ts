import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFeaturesComponent } from './key-features.component';

describe('KeyFeaturesComponent', () => {
  let component: KeyFeaturesComponent;
  let fixture: ComponentFixture<KeyFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
