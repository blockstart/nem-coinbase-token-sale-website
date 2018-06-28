import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalPageComponent } from './legal.component';
import { LegalBodyComponent } from './legal-body/legal-body.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    LegalPageComponent,
    LegalBodyComponent
  ],
  exports: [
    LegalPageComponent
  ]
})
export class LegalPageModule { }
