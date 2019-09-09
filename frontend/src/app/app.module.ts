import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ListAllProductsComponent } from './list-all-products/list-all-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ListOneTypeComponent } from './list-one-type/list-one-type.component';
import { ProductComponent } from './product/product.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';

import { DailyListComponent } from './daily-list/daily-list.component';
import { WeeklyListComponent } from './weekly-list/weekly-list.component';
import { MonthlyListComponent } from './monthly-list/monthly-list.component';
import { ColorListComponent } from './color-list/color-list.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { MaterialModule } from './material.module';
import { CartComponent } from './cart/cart.component';

import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ListAllProductsComponent,
    ProductDetailComponent,
    ListOneTypeComponent,
    ProductComponent,
    BreadCrumbComponent,
    DailyListComponent,
    WeeklyListComponent,
    MonthlyListComponent,
    ColorListComponent,
    BrandListComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    AccountInfoComponent,
    OrderHistoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
