import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-payment-fields',
  templateUrl: './popup-payment-fields.component.html',
  styleUrls: ['./popup-payment-fields.component.scss']
})

export class PopupPaymentFieldsComponent {
  @Input() title: string;
  @Input() type: string;
  @Input() address: string;
  @Input() stepIcon: string;
  @Input() message: string;
  @Input() copyAddress: string;
  @Input() copyAmount: number;
  @Input() copyMessage: string;

  private _addressCopied = false;

  get addressCopied(): boolean { return this._addressCopied; }

  copy = (text: string | number) => {
    this.copyText(text.toString());
    this._addressCopied = true;
    setTimeout(() => { this._addressCopied = false; }, 1500);
  }

  private copyText = (text: string) => {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.autofocus = true;
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
