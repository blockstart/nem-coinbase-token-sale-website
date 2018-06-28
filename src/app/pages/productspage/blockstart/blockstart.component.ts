import { Component } from '@angular/core';
import { EXTERNAL_URLS } from '../../../../util/constants';

@Component({
  selector: 'app-blockstart',
  templateUrl: './blockstart.component.html',
  styleUrls: ['./blockstart.component.scss']
})
export class BlockstartComponent {

  readonly blockstartLink = EXTERNAL_URLS.BLOCKSTART_IO;

}
