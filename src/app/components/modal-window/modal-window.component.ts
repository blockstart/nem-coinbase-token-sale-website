import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {

  @ViewChild('bg') bg: ElementRef;
  @Output() bgClicked = new EventEmitter<void>();

  onClicked = (event: MouseEvent) => {
    if (event.target === this.bg.nativeElement) {
      this.bgClicked.emit();
    }
  }

}
