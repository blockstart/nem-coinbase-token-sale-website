import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTransferIconsComponent } from './wallet-transfer-icons.component';

describe('WalletTransferIconsComponent', () => {
  let component: WalletTransferIconsComponent;
  let fixture: ComponentFixture<WalletTransferIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransferIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTransferIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
