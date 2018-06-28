export class XemPaymentDetails {
  readonly _cacheAddess: string;
  readonly _usdValue: number;
  readonly _xemAmount: number;
  readonly _message: string;

  get cacheAddress(): string { return this._cacheAddess; }
  get xemAmount(): number { return this._xemAmount; }

  constructor(address: string, usdValue: number, xemAmount: number, message: string) {
    this._cacheAddess = address;
    this._usdValue = usdValue;
    this._xemAmount = xemAmount;
    this._message = message;
  }
}
