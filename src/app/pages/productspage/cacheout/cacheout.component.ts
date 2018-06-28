import { Component, OnInit } from '@angular/core';
import {EXTERNAL_URLS} from '../../../../util/constants';

@Component({
  selector: 'app-cacheout',
  templateUrl: './cacheout.component.html',
  styleUrls: ['./cacheout.component.scss']
})
export class CacheoutComponent implements OnInit {

  readonly cacheoutLink = EXTERNAL_URLS.CACHEOUT;

  constructor() { }

  ngOnInit() {
  }

}
