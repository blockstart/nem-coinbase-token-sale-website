import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { CachePurchaseComponentComponent } from './cache-purchase-component/cache-purchase-component.component';
import { PurchaseContainerComponent } from './purchase-container/purchase-container.component';
import { PurchaseSummaryComponentComponent } from './purchase-summary-component/purchase-summary-component.component';
import { PurchasePageComponent } from './purchase.component';
import { QuestionsComponent } from './questions/questions.component';
import { PaymentManagerService } from '../../services/payment-manager/payment-manager.service';
import { PurchaseDetailsComponent } from './payment-details-page/payment-details.component';
import { PurchaseDetailsSummaryComponent } from './payment-details-page/purchase-details-summary/purchase-details-summary.component';
import { PurchaseDetailsBodyComponent } from './payment-details-page/purchase-details-body/purchase-details-body.component';
import { PaymentOptionsComponent } from './payment-details-page/payment-options/payment-options.component';
import { UsdComponent } from './payment-details-page/payment-options/usd/usd.component';
import { CoinbaseComponent } from './payment-details-page/payment-options/coinbase/coinbase.component';
import { KycFormComponent } from './payment-details-page/payment-options/kyc-form/kyc-form.component';
import { CoinbaseIconsComponent } from './payment-details-page/payment-options/coinbase-icons/coinbase-icons.component';
import { WalletTransferIconsComponent } from './payment-details-page/payment-options/wallet-transfer-icons/wallet-transfer-icons.component';
import { PaymentOptionInfoComponent } from './payment-details-page/payment-options/payment-option-info/payment-option-info.component';
import { ComplianceFormComponent } from './payment-details-page/payment-options/kyc-form/compliance-form/compliance-form.component';
import { WalletPaymentOptionsComponent } from './payment-details-page/payment-options/wallet-payment-options/wallet-payment-options.component';
import { PopupPaymentFieldsComponent } from './payment-details-page/popup-payment-fields/popup-payment-fields.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [
    PurchasePageComponent,
    CachePurchaseComponentComponent,
    PurchaseContainerComponent,
    PurchaseSummaryComponentComponent,
    QuestionsComponent,
    PurchaseDetailsComponent,
    PurchaseDetailsSummaryComponent,
    PurchaseDetailsBodyComponent,
    PaymentOptionsComponent,
    UsdComponent,
    CoinbaseComponent,
    KycFormComponent,
    CoinbaseIconsComponent,
    WalletTransferIconsComponent,
    PaymentOptionInfoComponent,
    ComplianceFormComponent,
    WalletPaymentOptionsComponent,
    PopupPaymentFieldsComponent
  ],
  providers: [
    PaymentManagerService
  ],
  exports: [
    PurchasePageComponent
  ]
})
export class PurchasePageModule {
}
