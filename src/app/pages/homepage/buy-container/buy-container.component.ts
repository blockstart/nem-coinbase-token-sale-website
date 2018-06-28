import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../../../../util/constants';

@Component({
  selector: 'app-buy-container',
  templateUrl: './buy-container.component.html',
  styleUrls: ['./buy-container.component.scss']
})
export class BuyContainerComponent {

  private _milestoneAmount = 0;

  get milestoneAmount(): number { return this._milestoneAmount; }

  set milestoneAmount(value) { this._milestoneAmount = Math.max(value, 0); }

  constructor(private route: Router) { }

  routeToMilestones = () => {
    this.route.navigate([ROUTES.MILESTONE_PAGE_URL]);
  }

}
