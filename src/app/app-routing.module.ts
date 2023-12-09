import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  {
    path : "products",
    component : HomeComponent
  },
  {
    path: "cart",
    component : CartComponent
  },
  {
    path: "sale",
    component : SaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
