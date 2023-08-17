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

import { WebsiteRoutes } from './resources/constants/WebsiteRoutes';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // Pages
      { path: WebsiteRoutes.PAGE_HOME, component: HomepageComponent },
      { path: WebsiteRoutes.PAGE_ABOUT_US, component: AboutUsComponent },
      { path: WebsiteRoutes.PAGE_CONTACT, component: ContactComponent },
      { path: WebsiteRoutes.PAGE_FAQ, component: FaqComponent },
      // User
      {
        path: WebsiteRoutes.PAGE_REGISTER,
        component: RegisterComponent,
      },
      { path: WebsiteRoutes.PAGE_LOGIN, component: LoginComponent },
      {
        path: WebsiteRoutes.PAGE_WISHLIST,
        component: WishlistComponent,
      },
      { path: WebsiteRoutes.PAGE_CART, component: CartComponent },
      {
        path: WebsiteRoutes.PAGE_CHECKOUT,
        component: CheckoutComponent,
      },
      // Product
      { path: WebsiteRoutes.PAGE_SHOP, component: ShopComponent },
      {
        path: WebsiteRoutes.PAGE_PRODUCT_DETAILS,
        component: ProductDetailsComponent,
      },
      // Company Important
      {
        path: WebsiteRoutes.PAGE_PRIVACY_POLICY,
        component: PrivacyPolicyComponent,
      },
      // Error Page
      {
        path: WebsiteRoutes.PAGE_ERROR,
        pathMatch: 'full',
        component: ErrorPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserInterfaceRoutingModule {}
