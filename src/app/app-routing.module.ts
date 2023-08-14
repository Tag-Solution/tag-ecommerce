import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeModule } from './websites/home.module';




const routes: Routes = [
  {
    path:'admin',
    loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'home',loadChildren:() => import( './websites/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: 'admin'
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)




  ],
  exports: [RouterModule

  ]
})
export class AppRoutingModule { }
