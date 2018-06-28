import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { VipVerificationService } from '../../services/vip-verification/vip-verification.service';
import { NavigationExtras, Router } from '@angular/router';
import { QUERY_PARAMS, ROUTES } from '../../../util/constants';
import { PurchaseOption } from '../../services/purchase-option/purchase-card.class';
import { KEY_CODE } from '../purchase-card/purchase-card.component';

@Component({
  selector: 'app-vip-lock',
  templateUrl: './vip-lock.component.html',
  styleUrls: ['./vip-lock.component.scss']
})
export class VipLockComponent {

  @Input() currentOption: PurchaseOption;
  @Input() verifyVipStatus = false;
  @Output() verifyVipStatusChange = new EventEmitter<boolean>();

  private _vipPassword = '';
  private _error = false;

  get vipPassword(): string { return this._vipPassword; }
  get error(): boolean { return this._error; }

  set vipPassword(value: string) { this._vipPassword = value; }
  set error(value: boolean) { this._error = value; }

  constructor(private route: Router,
              private vipVerificationService: VipVerificationService) { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.ESC) {
      this.verifyVipStatus = false;
      this.verifyVipStatusChange.emit(false);
    }
  }

  public passwordSubmitPressed = () => {
    if (!this.vipVerificationService.verifyVipPassword(this._vipPassword)) {
      return;
    }
    const navigationExtras: NavigationExtras = {queryParams: {}};
    if (this.currentOption) {
      navigationExtras.queryParams[QUERY_PARAMS.PRODUCT] = this.currentOption.id;
    }
    this.route.navigate([ROUTES.PURCHASE_PAGE_URL], navigationExtras);
  }

  closeModal = () => {
    this.verifyVipStatus = false;
    this.verifyVipStatusChange.emit(false);
    this.error = false;
    this._vipPassword = '';
  }
}
