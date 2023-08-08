import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';

/** aca van las rutas del modulo home*/
const routes: Routes = [
  {
    path: '',
    children:[
      {path:'navBar', component:NavBarComponent},
      {path:'**',redirectTo:'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
