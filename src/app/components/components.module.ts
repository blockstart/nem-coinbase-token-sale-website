import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';
import { ProductsComponent } from './products/products.component';
import { SaleTimerComponent } from './sale-timer/sale-timer.component';
import { PurchaseCardComponent } from './purchase-card/purchase-card.component';
import { Goal1Component } from './goal-1/goal-1.component';
import { Goal2Component } from './goal-2/goal-2.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsDarkComponent } from './products-dark/products-dark.component';
import { PurchaseOptionService } from '../services/purchase-option/purchase-option.service';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { FormsModule } from '@angular/forms';
import { ProudlyPresentsComponent } from './proudly-presents/proudly-presents.component';
import { TheHeaderComponent } from './header-component/header.component';
import { AppRouting } from '../app.routing';
import { VipLockComponent } from './vip-lock/vip-lock.component';
import { VipVerificationService } from '../services/vip-verification/vip-verification.service';
import { ProgressBarService } from './progress-bar/progress-bar.service';
import { MilestonePipe } from './progress-bar/milestone.pipe';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

const components = [
  NavbarComponent,
  NavItemComponent,
  ProductsComponent,
  ProductsDarkComponent,
  SaleTimerComponent,
  PurchaseCardComponent,
  Goal1Component,
  Goal2Component,
  FooterComponent,
  ProgressBarComponent,
  ModalWindowComponent,
  ProudlyPresentsComponent,
  TheHeaderComponent,
  VipLockComponent,
  MilestonePipe,
  LoadingScreenComponent
];

const providers = [
  PurchaseOptionService,
  VipVerificationService,
  ProgressBarService
];

@NgModule({
  imports: [
    CommonModule,
    AppRouting,
    FormsModule
  ],
  declarations: components,
  exports: components,
  providers: providers
})
export class ComponentsModule { }
