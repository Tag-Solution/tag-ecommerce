import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

/** aca van las rutas del modulo home*/
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomepageComponent },
      // Authentication
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      // Products
      { path: 'shop', component: ShopComponent },
      { path: 'product-details', component: ProductDetailsComponent },
      // Cart
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      // Pages
      { path: 'wishlist', component: WishlistComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'faq', component: FaqComponent },
      // Error
      { path: '**', pathMatch: 'full', component: ErrorPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserInterfaceRoutingModule {}
