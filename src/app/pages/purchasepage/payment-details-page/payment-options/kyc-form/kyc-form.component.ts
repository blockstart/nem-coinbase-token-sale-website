import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-kyc-form',
  templateUrl: './kyc-form.component.html',
  styleUrls: ['./kyc-form.component.scss']
})
export class KycFormComponent {

  @Input() cacheAmount = 0;
  @Input() recipientAddress = 'No Address Supplied';
  @Output() complianceSent = new EventEmitter<void>();

  readonly paymentInfo = {
    header: '<b>Please fill out the form to continue.</b>',
    body1: 'This is to legitimize your purchase as KYC & AML compliant.',
    body2: '',
    btnText: ''
  };

  onComplianceSent = (): void => {
    this.complianceSent.emit();
  }

}
