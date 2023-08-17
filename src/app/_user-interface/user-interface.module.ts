import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInterfaceRoutingModule } from './user-interface-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { LayoutComponent } from './layout/layout.component';
import { MinicartComponent } from './components/minicart/minicart.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    LayoutComponent,
    // Pages
    HomepageComponent,
    AboutUsComponent,
    ContactComponent,
    ShopComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    ErrorPageComponent,
    FaqComponent,
    ProductDetailsComponent,
    // Components
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    TopbarComponent,
    SearchComponent,
    MinicartComponent,
    PrivacyPolicyComponent,
  ],
  exports: [
    LayoutComponent,
    // Pages
    HomepageComponent,
    AboutUsComponent,
    ContactComponent,
    ShopComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    ErrorPageComponent,
    FaqComponent,
    ProductDetailsComponent,
    // Components
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    TopbarComponent,
    SearchComponent,
    MinicartComponent,
  ],
  imports: [CommonModule, UserInterfaceRoutingModule],
  providers: [],
})
export class UserInterfaceModule {}
