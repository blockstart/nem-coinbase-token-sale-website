export class PurchaseOption {
  readonly _numTokens: number;
  readonly _price: number;
  readonly _iconUrl: string;
  readonly _id: string;
  readonly _coinbaseId: string;
  readonly _isEnabled: boolean;

  get numTokens(): number { return this._numTokens; }
  get price(): number { return this._price; }
  get iconUrl(): string { return this._iconUrl; }
  get id(): string { return this._id; }
  get isEnabled(): boolean { return this._isEnabled; }

  constructor(numTokens: number, price: number, coinbaseId: string, id: string, isEnabled: boolean, iconUrl?: string) {
    this._numTokens = numTokens;
    this._price = price;
    this._iconUrl = iconUrl;
    this._id = id;
    this._coinbaseId = coinbaseId;
    this._isEnabled = isEnabled;
  }
}
