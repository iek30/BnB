import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoOfferPageRoutingModule } from './info-offer-routing.module';

import { InfoOfferPage } from './info-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoOfferPageRoutingModule
  ],
  declarations: [InfoOfferPage]
})
export class InfoOfferPageModule {}
