import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent} from './products-page.component';
import { HeaderComponent } from './header/header.component';
import { BlockstartComponent } from './blockstart/blockstart.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { BlockstartDevToolsComponent } from './blockstart-dev-tools/blockstart-dev-tools.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { CacheoutComponent } from './cacheout/cacheout.component';
import { AskQuestionsComponent } from './ask-questions/ask-questions.component';
import { QuestionBlurbsComponent } from './question-blurbs/question-blurbs.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    ProductsPageComponent,
    HeaderComponent,
    BlockstartComponent,
    KeyFeaturesComponent,
    BlockstartDevToolsComponent,
    GetStartedComponent,
    CacheoutComponent,
    AskQuestionsComponent,
    QuestionBlurbsComponent
  ],
  exports: [
    ProductsPageComponent
  ]
})
export class ProductsPageModule { }
