import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() milestone = 1000000;
  @Output() milestoneChange = new EventEmitter<number>();
  private _progress = '0';

  get progress(): string {
    return this._progress;
  }

  constructor(private progressBarService: ProgressBarService) { }

  ngOnInit() {
    this.updateProgress();
  }

  private updateProgress = () => {
    this.progressBarService.retrieveProgress().subscribe(res => {
      this.milestone = res.milestone;
      this.milestoneChange.emit(res.milestone);
      let percent = Math.min((res.amount / this.milestone), 1);
      percent = percent * 100;
      this._progress = percent.toString();
    }, err => {
      console.debug(err);
    });
  }
}
