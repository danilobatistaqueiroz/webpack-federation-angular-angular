import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartsComponent } from './shopping-carts.component';
import { ShoppingCartsRoutingModule } from './shopping-carts.routing';



@NgModule({
  declarations: [ShoppingCartsComponent],
  imports: [
    CommonModule,
    ShoppingCartsRoutingModule
  ],
  exports: [ShoppingCartsComponent]
})
export class ShoppingCartsModule {
  constructor(){
    console.log('shopping-carts module initialized');
    
  }
 }
