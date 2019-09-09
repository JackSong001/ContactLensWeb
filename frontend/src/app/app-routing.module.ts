import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListAllProductsComponent } from './list-all-products/list-all-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { DailyListComponent } from './daily-list/daily-list.component';
import { ColorListComponent } from './color-list/color-list.component';
import { MonthlyListComponent } from './monthly-list/monthly-list.component';
import { WeeklyListComponent } from './weekly-list/weekly-list.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListAllProductsComponent },
  { path: 'products/:name', component: ProductDetailComponent },
  { path: 'brands/:name', component: BrandListComponent },
  { path: 'daily', component: DailyListComponent },
  { path: 'weekly', component: WeeklyListComponent },
  { path: 'monthly', component: MonthlyListComponent },
  { path: 'color', component: ColorListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent},
  { path: 'register', component: RegisterComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
