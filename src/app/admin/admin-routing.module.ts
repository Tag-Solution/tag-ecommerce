import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'header',component:HeaderComponent},
      {path:'listar',component:UsersComponent},
      {path:'**',redirectTo:'header'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
