import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockstartComponent } from './blockstart.component';

describe('BlockstartComponent', () => {
  let component: BlockstartComponent;
  let fixture: ComponentFixture<BlockstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
