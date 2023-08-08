import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { UsersComponent } from './pages/users/users.component';
import { CrearUserComponent } from './pages/users/crear-user/crear-user.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'header',component:HeaderComponent},
      {path:'listar',component:UsersComponent},
      {path:'crear-user',component:CrearUserComponent},
      {path:'**',redirectTo:'header'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
