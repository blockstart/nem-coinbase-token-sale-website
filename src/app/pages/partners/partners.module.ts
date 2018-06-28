import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { PartnersPageComponent } from './partners.component';
import { PartnerBoxComponent } from './partner-box/partner-box.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    PartnersPageComponent,
    PartnerBoxComponent,
    ComingSoonComponent
  ],
  exports: [
    PartnersPageComponent
  ]
})
export class PartnersPageModule { }
