import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockstartDevToolsComponent } from './blockstart-dev-tools.component';

describe('BlockstartDevToolsComponent', () => {
  let component: BlockstartDevToolsComponent;
  let fixture: ComponentFixture<BlockstartDevToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockstartDevToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockstartDevToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
