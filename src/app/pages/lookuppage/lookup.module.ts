import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LookupPageComponent } from './lookup.component';
import { LookupBodyComponent } from './lookup-body/lookup-body.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [
    LookupPageComponent,
    LookupBodyComponent
  ],
  exports: [
    LookupPageComponent
  ]
})
export class LookupPageModule { }
