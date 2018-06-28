import { Component } from '@angular/core';
import { EXTERNAL_URLS } from '../../../../util/constants';

@Component({
  selector: 'app-why-nem',
  templateUrl: './why-nem.component.html',
  styleUrls: ['./why-nem.component.scss']
})
export class WhyNemComponent {

  readonly nemLink = EXTERNAL_URLS.NEM_OFFICIAL_WEBSITE;

}
