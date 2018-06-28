import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheoutComponent } from './cacheout.component';

describe('CacheoutComponent', () => {
  let component: CacheoutComponent;
  let fixture: ComponentFixture<CacheoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacheoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
