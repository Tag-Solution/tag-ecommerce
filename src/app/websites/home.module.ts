import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterHomeComponent } from './components/footer-home/footer-home.component';


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
