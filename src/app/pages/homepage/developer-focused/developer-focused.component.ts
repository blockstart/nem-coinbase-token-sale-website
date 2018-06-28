import { Component } from '@angular/core';
import { EXTERNAL_URLS } from '../../../../util/constants';

@Component({
  selector: 'app-developer-focused',
  templateUrl: './developer-focused.component.html',
  styleUrls: ['./developer-focused.component.scss']
})
export class DeveloperFocusedComponent {

  readonly sdkUrl = EXTERNAL_URLS.JS_SDK;

}
