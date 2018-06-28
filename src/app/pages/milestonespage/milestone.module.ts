import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilestonePageComponent } from './milestone.component';
import { LeftInfoBoxComponent } from './left-info-box/left-info-box.component';
import { RightInfoBoxComponent } from './right-info-box/right-info-box.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    MilestonePageComponent,
    LeftInfoBoxComponent,
    RightInfoBoxComponent
  ],
  exports: [
    MilestonePageComponent
  ]
})
export class MilestonePageModule { }
