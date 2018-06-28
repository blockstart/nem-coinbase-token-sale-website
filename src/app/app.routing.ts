import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES } from '../util/constants';
import { HomeComponent } from './pages/homepage/home.component';
import { ProductsPageComponent } from './pages/productspage/products-page.component';
import { LegalPageComponent } from './pages/legalpage/legal.component';
import { PurchasePageComponent } from './pages/purchasepage/purchase.component';
import { MilestonePageComponent } from './pages/milestonespage/milestone.component';
import { PartnersPageComponent } from './pages/partners/partners.component';
import { LookupPageComponent } from './pages/lookuppage/lookup.component';
import { PurchaseDetailsComponent } from './pages/purchasepage/payment-details-page/payment-details.component';
import { PromoRedirectComponent } from './pages/partnership-promo-page/promo-redirect/promo-redirect.component';

const routes: Routes = [
  { path: ROUTES.HOME_PAGE_URL, component: HomeComponent },
  { path: ROUTES.PLATFORMS_PAGE_URL, component: ProductsPageComponent },
  { path: ROUTES.LEGAL_PAGE_URL, component: LegalPageComponent },
  { path: ROUTES.LOOKUP_PAGE_URL, component: LookupPageComponent },
  { path: ROUTES.PURCHASE_PAGE_URL, component: PurchasePageComponent },
  { path: ROUTES.PURCHASE_DETAILS, component: PurchaseDetailsComponent },
  { path: ROUTES.MILESTONE_PAGE_URL, component: MilestonePageComponent },
  { path: ROUTES.PARTNERS_PAGE_URL, component: PartnersPageComponent },
  { path: ROUTES.PARTNERSHIP_PROMO_PAGE_URL, component: PromoRedirectComponent },
  { path: '**', component: HomeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
