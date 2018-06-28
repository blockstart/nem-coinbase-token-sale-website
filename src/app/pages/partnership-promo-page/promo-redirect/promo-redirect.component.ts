import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-redirect',
  templateUrl: './promo-redirect.component.html',
  styleUrls: ['./promo-redirect.component.scss']
})
export class PromoRedirectComponent implements OnInit {

  constructor() {
    window.open('https://s3.amazonaws.com/maximus-cache/docs/Cache+Token+Partnership+Deck+2018.pdf', '_self');
  }

  ngOnInit() {
  }

}
