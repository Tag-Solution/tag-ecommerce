import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { FotterAdminComponent } from './fotter-admin/fotter-admin.component';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    ContentWrapperComponent,
    FotterAdminComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    ContentWrapperComponent,
    FotterAdminComponent

  ]
})
export class ComponentModuleModule { }
