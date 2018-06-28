import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyNemComponent } from './why-nem.component';

describe('WhyNemComponent', () => {
  let component: WhyNemComponent;
  let fixture: ComponentFixture<WhyNemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyNemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyNemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
