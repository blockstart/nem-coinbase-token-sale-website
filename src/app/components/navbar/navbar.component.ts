import { Component, HostListener } from '@angular/core';
import { NavItem } from './nav-item/model/nav-item';
import { EXTERNAL_URLS, ROUTES } from '../../../util/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private _pageScroll = false;
  private _slideNavExpanded = false;

  get pageScroll(): boolean { return this._pageScroll; }
  get slideNavExpanded(): boolean { return this._slideNavExpanded; }

  readonly navItems = [
    new NavItem('Platforms', ROUTES.PLATFORMS_PAGE_URL),
    new NavItem('Milestones', ROUTES.MILESTONE_PAGE_URL),
    new NavItem('Partners', ROUTES.PARTNERS_PAGE_URL),
    new NavItem('Legal', ROUTES.LEGAL_PAGE_URL),
    new NavItem('Resources', null, 'line before after', EXTERNAL_URLS.RESOURCES)
  ];

  readonly wpNavItem = new NavItem('Whitepaper', null, 'line before after', EXTERNAL_URLS.WHITEPAPER);
  readonly walletNavItem = new NavItem('Cache Wallet', null, 'btn-main hideOnMobile', EXTERNAL_URLS.CACHE_WALLET);

  readonly wpUrls = {
    english: EXTERNAL_URLS.WHITEPAPER,
    japanese: EXTERNAL_URLS.WHITEPAPER_JPN,
    russia: EXTERNAL_URLS.WHITEPAPER_RUS,
    indonesia: EXTERNAL_URLS.WHITEPAPER_IND,
    turkey: EXTERNAL_URLS.WHITEPAPER_TUR,
    french: EXTERNAL_URLS.WHITEPAPER_FRA,
    italian: EXTERNAL_URLS.WHITEPAPER_ITA,
    filipino: EXTERNAL_URLS.WHITEPAPER_FIL
  };

  @HostListener('window:scroll', [])
  public scrollTriggered() {
    if (window.pageYOffset < 20) {
      this._pageScroll = false;
    }
    this._pageScroll = true;
  }

  toggleSlideNav = () => {
    this._slideNavExpanded = !this.slideNavExpanded;
  }
}
