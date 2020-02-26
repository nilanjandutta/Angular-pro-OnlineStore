import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './../checkout/checkout.component';
import { CartDetailsComponent } from './../cart-details/cart-details.component';
import { CartSummaryComponent } from './../cart-summary/cart-summary.component';
import { ModelModule } from './../../Model/Model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { StoreComponent } from './store.component';


@NgModule({
    imports: [
      BrowserModule,
      ModelModule,
      FormsModule,
      RouterModule
    ],
    declarations:
    [
        StoreComponent, CartSummaryComponent,
        CheckoutComponent, CartDetailsComponent
    ],
    exports:
    [
        StoreComponent, CheckoutComponent, CartDetailsComponent
    ]
  })
  export class StoreModule { }