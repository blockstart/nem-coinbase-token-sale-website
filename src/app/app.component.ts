import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {}

  onActivate = (event: Event) => {
    window.scroll(0, 0);
  }

  ngOnInit() {

  }
}
