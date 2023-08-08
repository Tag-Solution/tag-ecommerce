import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { ContentWrapperComponent } from './pages/content-wrapper/content-wrapper.component';
import { UsersComponent } from './pages/users/users.component';
import { ContentUserComponent } from './pages/users/content-user/content-user.component';
import { CrearUserComponent } from './pages/users/crear-user/crear-user.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ContentWrapperComponent,
    UsersComponent,
    ContentUserComponent,
    CrearUserComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
