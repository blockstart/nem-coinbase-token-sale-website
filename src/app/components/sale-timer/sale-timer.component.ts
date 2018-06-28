import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-timer',
  templateUrl: './sale-timer.component.html',
  styleUrls: ['./sale-timer.component.scss']
})
export class SaleTimerComponent implements OnInit {

  private _targetName = 'Private Sale';
  private _targetTimeString = '2018-07-26T06:59:00Z';
  private _targetTime = new Date(this._targetTimeString);
  private _seconds = 0;
  private _minutes = 0;
  private _hours = 0;
  private _days = 0;

  get targetName(): string { return this._targetName; }
  get seconds(): number { return this._seconds; }
  get minutes(): number { return this._minutes; }
  get hours(): number { return this._hours; }
  get days(): number { return this._days; }

  ngOnInit() {
    this.updateCountdown();
  }

  updateCountdown = (): void => {
    const time = this.calcTime();
    this._seconds = Math.floor((time / 1000) % 60);
    this._minutes = Math.floor((time / 1000 / 60) % 60);
    this._hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    this._days = Math.floor(time / (1000 * 60 * 60 * 24));
    setTimeout(() => { this.updateCountdown(); }, 100);
  }

  private calcTime = (): number => {
    const currentDateString = new Date(Date.now()).toUTCString();
    const currentDate = new Date(currentDateString);
    return this._targetTime.getTime() - currentDate.getTime();
  }

}
