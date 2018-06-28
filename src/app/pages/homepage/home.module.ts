import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../../components/components.module';
import { BuyContainerComponent } from './buy-container/buy-container.component';
import { AppDemoComponent } from './app-demo/app-demo.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { DeveloperFocusedComponent } from './developer-focused/developer-focused.component';
import { TokenDistributionComponent } from './token-distribution/token-distribution.component';
import { FundingGoalComponent } from './funding-goal/funding-goal.component';
import { TeamComponent } from './team/team.component';
import { WhyNemComponent } from './why-nem/why-nem.component';



@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    BuyContainerComponent,
    AppDemoComponent,
    ViewProductsComponent,
    DeveloperFocusedComponent,
    TokenDistributionComponent,
    FundingGoalComponent,
    TeamComponent,
    WhyNemComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
