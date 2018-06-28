import { Component } from '@angular/core';
import { ROUTES } from '../../../../util/constants';

@Component({
  selector: 'app-funding-goal',
  templateUrl: './funding-goal.component.html',
  styleUrls: ['./funding-goal.component.scss']
})
export class FundingGoalComponent {

  readonly goalsRoute = ROUTES.MILESTONE_PAGE_URL;

}
