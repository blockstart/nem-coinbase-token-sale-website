import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBlurbsComponent } from './question-blurbs.component';

describe('QuestionBlurbsComponent', () => {
  let component: QuestionBlurbsComponent;
  let fixture: ComponentFixture<QuestionBlurbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBlurbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBlurbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
