import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FooterHomeComponent } from './pages/footer-home/footer-home.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
