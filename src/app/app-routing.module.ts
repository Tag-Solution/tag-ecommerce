import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './components/nopage-found/nopage-found.component';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './pages/page-routing.module';
import { AuthRoutingModule } from './components/auth/auth-routing.module';





const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', component: NopageFoundComponent}


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PageRoutingModule,
    AuthRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
