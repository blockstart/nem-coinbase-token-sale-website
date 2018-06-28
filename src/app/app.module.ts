import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';

// Modules
import { ProductsPageModule } from './pages/productspage/products-page.module';
import { MilestonePageModule } from './pages/milestonespage/milestone.module';
import { PurchasePageModule } from './pages/purchasepage/purchase.module';
import { LegalPageModule } from './pages/legalpage/legal.module';
import { LookupPageModule } from './pages/lookuppage/lookup.module';
import { PartnershipPromoPageModule } from './pages/partnership-promo-page/partnership-promo-page.module';

// Components
import { AppComponent } from './app.component';

// Services
import { PurchaseOptionService } from './services/purchase-option/purchase-option.service';
import { HttpClientModule } from '@angular/common/http';
import { PartnersPageModule } from './pages/partners/partners.module';
import { ComponentsModule } from './components/components.module';
import { HomeModule } from './pages/homepage/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    ComponentsModule,
    HomeModule,
    ProductsPageModule,
    LegalPageModule,
    LookupPageModule,
    MilestonePageModule,
    PurchasePageModule,
    HttpClientModule,
    PartnersPageModule,
    PartnershipPromoPageModule
  ],
  providers: [
    PurchaseOptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
