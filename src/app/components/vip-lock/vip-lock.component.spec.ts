import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipLockComponent } from './vip-lock.component';

describe('VipLockComponent', () => {
  let component: VipLockComponent;
  let fixture: ComponentFixture<VipLockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipLockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
