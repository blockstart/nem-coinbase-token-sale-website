import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { KycInfoSheet, PaymentManagerService } from '../../../../../../services/payment-manager/payment-manager.service';
import { PurchaseOptionService } from '../../../../../../services/purchase-option/purchase-option.service';

@Component({
  selector: 'app-compliance-form',
  templateUrl: './compliance-form.component.html',
  styleUrls: ['./compliance-form.component.scss']
})
export class ComplianceFormComponent {

  @Input() cacheAmount = 0;
  @Input() recipientAddress = 'No Address Supplied';
  @Output() complianceFormSent = new EventEmitter<void>();
  @ViewChild('video') video: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;

  private _inputName = '';
  private _inputAddress1 = '';
  private _inputAddress2 = '';
  private _inputCity = '';
  private _inputState = '';
  private _inputZip = '';
  private _photoId: File;
  private _photoWithId: File;
  private _proofOfRes: File;
  private _selectCountry = 'Choose...';
  private _invalidCountry = false;
  private _photoIdError = '';
  private _photoWithIdError = '';
  private _porError = '';
  private _currentStream: MediaStream;
  private _confirmingPhoto = false;
  private _photoTarget: WebcamTargets;
  private _submitting = false;

  get inputName(): string { return this._inputName; }
  get inputAddress1(): string { return this._inputAddress1; }
  get inputAddress2(): string { return this._inputAddress2; }
  get inputCity(): string { return this._inputCity; }
  get inputState(): string { return this._inputState; }
  get inputZip(): string { return this._inputZip; }
  get photoId(): File { return this._photoId; }
  get photoWithId(): File { return this._photoWithId; }
  get proofOfRes(): File { return this._proofOfRes; }
  get selectCountry(): string { return this._selectCountry; }
  get invalidCountry(): boolean { return this._invalidCountry; }
  get photoIdError(): string { return this._photoIdError; }
  get photoWithIdError(): string { return this._photoWithIdError; }
  get porError(): string { return this._porError; }
  get confirmingPhoto(): boolean { return this._confirmingPhoto; }
  get submitting(): boolean { return this._submitting; }

  set inputName(value: string) { this._inputName = value; }
  set inputAddress1(value: string) { this._inputAddress1 = value; }
  set inputAddress2(value: string) { this._inputAddress2 = value; }
  set inputCity(value: string) { this._inputCity = value; }
  set inputState(value: string) { this._inputState = value; }
  set inputZip(value: string) { this._inputZip = value; }
  set selectCountry(value: string) {
    if (this.countries.findIndex(x => x.code === value) >= 0) {
      this._selectCountry = value;
    }
  }

  readonly china = countries.findIndex(item => item.code === 'CN');
  readonly maxPhotoSize = 2097152;
  readonly webcamTargets = WebcamTargets;
  readonly countries = countries;
  readonly acceptedFileFormats = [
    'jpg',
    'png',
    'tiff'
  ];

  constructor(private ps: PurchaseOptionService,
              private paymentManager: PaymentManagerService) { }

  getPhotoId = (event) => {
    const result = this.fetchFileFromEvent(event);
    this._photoId = result.file;
    this._photoIdError = result.message;
  }

  getPhotoWithId = (event) => {
    const result = this.fetchFileFromEvent(event);
    this._photoWithId = result.file;
    this._photoWithIdError = result.message;
  }

  getPoR = (event) => {
    const result = this.fetchFileFromEvent(event);
    this._proofOfRes = result.file;
    this._porError = result.message;
  }

  disableChina = (event?) => {
    if (this.selectCountry === countries[this.china].code) {
      this._invalidCountry = true;
      this._selectCountry = '';
      return false;
    }
    this._invalidCountry = false;
    return true;
  }

  submit = () => {
    this._submitting = true;
    const infoSheet: KycInfoSheet = {
      fullName: this.inputName,
      address1: this.inputAddress1,
      address2: this.inputAddress2,
      city: this.inputCity,
      state: this.inputState,
      zipCode: this.inputZip,
      country: this.selectCountry,
      senderCacheAddress: this.recipientAddress,
      photoWithIdPath: this.photoWithId,
      photoIdPath: this.photoId,
      proofOfResidencePath: this.proofOfRes,
    };

    this.paymentManager.uploadKycInfo(infoSheet).subscribe(res => {
      this.complianceFormSent.emit();
      this._submitting = false;
    }, err => {
      console.debug(err);
      this._submitting = false;
    });
  }

  onWebcamClicked = (target: WebcamTargets) => {
    this._confirmingPhoto = false;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this._currentStream = stream;
        try {
          this.video.nativeElement.srcObject = stream;
        } catch (e) {
          console.debug(e);
          this.video.nativeElement.src = window.URL.createObjectURL(this._currentStream);
        }
        this.video.nativeElement.play();
        this._photoTarget = target;
      });
    }
  }

  onCaptureClicked = () => {
    this.takePhoto();
  }

  onRetakeClicked = () => {
    this.video.nativeElement.play();
    this.onWebcamClicked(this._photoTarget);
  }

  onAcceptPhotoClicked = () => {
    const file = this.canvas.nativeElement.toDataURL('image/png');
    const newFile = new File([this.dataURItoBlob(file)], `webcam_${this._photoTarget}.png`, {type: 'image/png'});

    switch (this._photoTarget) {
      case WebcamTargets.photoId:
        this._photoId = newFile;
        break;
      case WebcamTargets.proofOfResidency:
        this._proofOfRes = newFile;
        break;
      case WebcamTargets.photoWithId:
        this._photoWithId = newFile;
    }
  }

  private takePhoto = () => {
    this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this._confirmingPhoto = true;
    this.stopCamera();
  }

  private dataURItoBlob = (dataURI: string) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: mimeString});
  }

  private stopCamera = () => {
    for (const track of this._currentStream.getTracks()) {
      track.stop();
    }
  }

  private fetchFileFromEvent = (event): {file: File, message: string} => {
    let file: File;
    let message = '';
    try {
      if (event.target.files.length > 0) {
        const tempFile = event.target.files[0];
        if (tempFile.size > this.maxPhotoSize) {
          return { file: null, message: 'Files must be < 2MB' };
        }
        const splitFileName = tempFile.name.split('.');
        const extension = splitFileName[splitFileName.length - 1];
        if (this.acceptedFileFormats.includes(extension.toLowerCase())) {
          file = tempFile;
        } else {
          message = 'Valid file formats are';
          for (const format of this.acceptedFileFormats) {
            message += ` .${format}`;
          }
        }
      }
    } catch (e) {
      message = 'Error uploading file';
      console.debug(e);
    }
    return { file: file, message: message };
  }
}

enum WebcamTargets {
  photoId = 'id',
  proofOfResidency = 'por',
  photoWithId = 'withId'
}

const countries = [
  {name: 'Afghanistan', code: 'AF'},
  {name: 'Åland Islands', code: 'AX'},
  {name: 'Albania', code: 'AL'},
  {name: 'Algeria', code: 'DZ'},
  {name: 'American Samoa', code: 'AS'},
  {name: 'Andorra', code: 'AD'},
  {name: 'Angola', code: 'AO'},
  {name: 'Anguilla', code: 'AI'},
  {name: 'Antarctica', code: 'AQ'},
  {name: 'Antigua and Barbuda', code: 'AG'},
  {name: 'Argentina', code: 'AR'},
  {name: 'Armenia', code: 'AM'},
  {name: 'Aruba', code: 'AW'},
  {name: 'Australia', code: 'AU'},
  {name: 'Austria', code: 'AT'},
  {name: 'Azerbaijan', code: 'AZ'},
  {name: 'Bahamas', code: 'BS'},
  {name: 'Bahrain', code: 'BH'},
  {name: 'Bangladesh', code: 'BD'},
  {name: 'Barbados', code: 'BB'},
  {name: 'Belarus', code: 'BY'},
  {name: 'Belgium', code: 'BE'},
  {name: 'Belize', code: 'BZ'},
  {name: 'Benin', code: 'BJ'},
  {name: 'Bermuda', code: 'BM'},
  {name: 'Bhutan', code: 'BT'},
  {name: 'Bolivia', code: 'BO'},
  {name: 'Bosnia and Herzegovina', code: 'BA'},
  {name: 'Botswana', code: 'BW'},
  {name: 'Bouvet Island', code: 'BV'},
  {name: 'Brazil', code: 'BR'},
  {name: 'British Indian Ocean Territory', code: 'IO'},
  {name: 'Brunei Darussalam', code: 'BN'},
  {name: 'Bulgaria', code: 'BG'},
  {name: 'Burkina Faso', code: 'BF'},
  {name: 'Burundi', code: 'BI'},
  {name: 'Cambodia', code: 'KH'},
  {name: 'Cameroon', code: 'CM'},
  {name: 'Canada', code: 'CA'},
  {name: 'Cape Verde', code: 'CV'},
  {name: 'Cayman Islands', code: 'KY'},
  {name: 'Central African Republic', code: 'CF'},
  {name: 'Chad', code: 'TD'},
  {name: 'Chile', code: 'CL'},
  {name: 'China', code: 'CN'},
  {name: 'Christmas Island', code: 'CX'},
  {name: 'Cocos (Keeling) Islands', code: 'CC'},
  {name: 'Colombia', code: 'CO'},
  {name: 'Comoros', code: 'KM'},
  {name: 'Congo', code: 'CG'},
  {name: 'Congo, The Democratic Republic of the', code: 'CD'},
  {name: 'Cook Islands', code: 'CK'},
  {name: 'Costa Rica', code: 'CR'},
  {name: 'Cote D\'Ivoire', code: 'CI'},
  {name: 'Croatia', code: 'HR'},
  {name: 'Cuba', code: 'CU'},
  {name: 'Cyprus', code: 'CY'},
  {name: 'Czech Republic', code: 'CZ'},
  {name: 'Denmark', code: 'DK'},
  {name: 'Djibouti', code: 'DJ'},
  {name: 'Dominica', code: 'DM'},
  {name: 'Dominican Republic', code: 'DO'},
  {name: 'Ecuador', code: 'EC'},
  {name: 'Egypt', code: 'EG'},
  {name: 'El Salvador', code: 'SV'},
  {name: 'Equatorial Guinea', code: 'GQ'},
  {name: 'Eritrea', code: 'ER'},
  {name: 'Estonia', code: 'EE'},
  {name: 'Ethiopia', code: 'ET'},
  {name: 'Falkland Islands (Malvinas)', code: 'FK'},
  {name: 'Faroe Islands', code: 'FO'},
  {name: 'Fiji', code: 'FJ'},
  {name: 'Finland', code: 'FI'},
  {name: 'France', code: 'FR'},
  {name: 'French Guiana', code: 'GF'},
  {name: 'French Polynesia', code: 'PF'},
  {name: 'French Southern Territories', code: 'TF'},
  {name: 'Gabon', code: 'GA'},
  {name: 'Gambia', code: 'GM'},
  {name: 'Georgia', code: 'GE'},
  {name: 'Germany', code: 'DE'},
  {name: 'Ghana', code: 'GH'},
  {name: 'Gibraltar', code: 'GI'},
  {name: 'Greece', code: 'GR'},
  {name: 'Greenland', code: 'GL'},
  {name: 'Grenada', code: 'GD'},
  {name: 'Guadeloupe', code: 'GP'},
  {name: 'Guam', code: 'GU'},
  {name: 'Guatemala', code: 'GT'},
  {name: 'Guernsey', code: 'GG'},
  {name: 'Guinea', code: 'GN'},
  {name: 'Guinea-Bissau', code: 'GW'},
  {name: 'Guyana', code: 'GY'},
  {name: 'Haiti', code: 'HT'},
  {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
  {name: 'Holy See (Vatican City State)', code: 'VA'},
  {name: 'Honduras', code: 'HN'},
  {name: 'Hong Kong', code: 'HK'},
  {name: 'Hungary', code: 'HU'},
  {name: 'Iceland', code: 'IS'},
  {name: 'India', code: 'IN'},
  {name: 'Indonesia', code: 'ID'},
  {name: 'Iran, Islamic Republic Of', code: 'IR'},
  {name: 'Iraq', code: 'IQ'},
  {name: 'Ireland', code: 'IE'},
  {name: 'Isle of Man', code: 'IM'},
  {name: 'Israel', code: 'IL'},
  {name: 'Italy', code: 'IT'},
  {name: 'Jamaica', code: 'JM'},
  {name: 'Japan', code: 'JP'},
  {name: 'Jersey', code: 'JE'},
  {name: 'Jordan', code: 'JO'},
  {name: 'Kazakhstan', code: 'KZ'},
  {name: 'Kenya', code: 'KE'},
  {name: 'Kiribati', code: 'KI'},
  {name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
  {name: 'Korea, Republic of', code: 'KR'},
  {name: 'Kuwait', code: 'KW'},
  {name: 'Kyrgyzstan', code: 'KG'},
  {name: 'Lao People\'s Democratic Republic', code: 'LA'},
  {name: 'Latvia', code: 'LV'},
  {name: 'Lebanon', code: 'LB'},
  {name: 'Lesotho', code: 'LS'},
  {name: 'Liberia', code: 'LR'},
  {name: 'Libyan Arab Jamahiriya', code: 'LY'},
  {name: 'Liechtenstein', code: 'LI'},
  {name: 'Lithuania', code: 'LT'},
  {name: 'Luxembourg', code: 'LU'},
  {name: 'Macao', code: 'MO'},
  {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
  {name: 'Madagascar', code: 'MG'},
  {name: 'Malawi', code: 'MW'},
  {name: 'Malaysia', code: 'MY'},
  {name: 'Maldives', code: 'MV'},
  {name: 'Mali', code: 'ML'},
  {name: 'Malta', code: 'MT'},
  {name: 'Marshall Islands', code: 'MH'},
  {name: 'Martinique', code: 'MQ'},
  {name: 'Mauritania', code: 'MR'},
  {name: 'Mauritius', code: 'MU'},
  {name: 'Mayotte', code: 'YT'},
  {name: 'Mexico', code: 'MX'},
  {name: 'Micronesia, Federated States of', code: 'FM'},
  {name: 'Moldova, Republic of', code: 'MD'},
  {name: 'Monaco', code: 'MC'},
  {name: 'Mongolia', code: 'MN'},
  {name: 'Montserrat', code: 'MS'},
  {name: 'Morocco', code: 'MA'},
  {name: 'Mozambique', code: 'MZ'},
  {name: 'Myanmar', code: 'MM'},
  {name: 'Namibia', code: 'NA'},
  {name: 'Nauru', code: 'NR'},
  {name: 'Nepal', code: 'NP'},
  {name: 'Netherlands', code: 'NL'},
  {name: 'Netherlands Antilles', code: 'AN'},
  {name: 'New Caledonia', code: 'NC'},
  {name: 'New Zealand', code: 'NZ'},
  {name: 'Nicaragua', code: 'NI'},
  {name: 'Niger', code: 'NE'},
  {name: 'Nigeria', code: 'NG'},
  {name: 'Niue', code: 'NU'},
  {name: 'Norfolk Island', code: 'NF'},
  {name: 'Northern Mariana Islands', code: 'MP'},
  {name: 'Norway', code: 'NO'},
  {name: 'Oman', code: 'OM'},
  {name: 'Pakistan', code: 'PK'},
  {name: 'Palau', code: 'PW'},
  {name: 'Palestinian Territory, Occupied', code: 'PS'},
  {name: 'Panama', code: 'PA'},
  {name: 'Papua New Guinea', code: 'PG'},
  {name: 'Paraguay', code: 'PY'},
  {name: 'Peru', code: 'PE'},
  {name: 'Philippines', code: 'PH'},
  {name: 'Pitcairn', code: 'PN'},
  {name: 'Poland', code: 'PL'},
  {name: 'Portugal', code: 'PT'},
  {name: 'Puerto Rico', code: 'PR'},
  {name: 'Qatar', code: 'QA'},
  {name: 'Reunion', code: 'RE'},
  {name: 'Romania', code: 'RO'},
  {name: 'Russian Federation', code: 'RU'},
  {name: 'Rwanda', code: 'RW'},
  {name: 'Saint Helena', code: 'SH'},
  {name: 'Saint Kitts and Nevis', code: 'KN'},
  {name: 'Saint Lucia', code: 'LC'},
  {name: 'Saint Pierre and Miquelon', code: 'PM'},
  {name: 'Saint Vincent and the Grenadines', code: 'VC'},
  {name: 'Samoa', code: 'WS'},
  {name: 'San Marino', code: 'SM'},
  {name: 'Sao Tome and Principe', code: 'ST'},
  {name: 'Saudi Arabia', code: 'SA'},
  {name: 'Senegal', code: 'SN'},
  {name: 'Serbia and Montenegro', code: 'CS'},
  {name: 'Seychelles', code: 'SC'},
  {name: 'Sierra Leone', code: 'SL'},
  {name: 'Singapore', code: 'SG'},
  {name: 'Slovakia', code: 'SK'},
  {name: 'Slovenia', code: 'SI'},
  {name: 'Solomon Islands', code: 'SB'},
  {name: 'Somalia', code: 'SO'},
  {name: 'South Africa', code: 'ZA'},
  {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
  {name: 'Spain', code: 'ES'},
  {name: 'Sri Lanka', code: 'LK'},
  {name: 'Sudan', code: 'SD'},
  {name: 'Suriname', code: 'SR'},
  {name: 'Svalbard and Jan Mayen', code: 'SJ'},
  {name: 'Swaziland', code: 'SZ'},
  {name: 'Sweden', code: 'SE'},
  {name: 'Switzerland', code: 'CH'},
  {name: 'Syrian Arab Republic', code: 'SY'},
  {name: 'Taiwan, Province of China', code: 'TW'},
  {name: 'Tajikistan', code: 'TJ'},
  {name: 'Tanzania, United Republic of', code: 'TZ'},
  {name: 'Thailand', code: 'TH'},
  {name: 'Timor-Leste', code: 'TL'},
  {name: 'Togo', code: 'TG'},
  {name: 'Tokelau', code: 'TK'},
  {name: 'Tonga', code: 'TO'},
  {name: 'Trinidad and Tobago', code: 'TT'},
  {name: 'Tunisia', code: 'TN'},
  {name: 'Turkey', code: 'TR'},
  {name: 'Turkmenistan', code: 'TM'},
  {name: 'Turks and Caicos Islands', code: 'TC'},
  {name: 'Tuvalu', code: 'TV'},
  {name: 'Uganda', code: 'UG'},
  {name: 'Ukraine', code: 'UA'},
  {name: 'United Arab Emirates', code: 'AE'},
  {name: 'United Kingdom', code: 'GB'},
  {name: 'United States', code: 'US'},
  {name: 'United States Minor Outlying Islands', code: 'UM'},
  {name: 'Uruguay', code: 'UY'},
  {name: 'Uzbekistan', code: 'UZ'},
  {name: 'Vanuatu', code: 'VU'},
  {name: 'Venezuela', code: 'VE'},
  {name: 'Vietnam', code: 'VN'},
  {name: 'Virgin Islands, British', code: 'VG'},
  {name: 'Virgin Islands, U.S.', code: 'VI'},
  {name: 'Wallis and Futuna', code: 'WF'},
  {name: 'Western Sahara', code: 'EH'},
  {name: 'Yemen', code: 'YE'},
  {name: 'Zambia', code: 'ZM'},
  {name: 'Zimbabwe', code: 'ZW'}
];
