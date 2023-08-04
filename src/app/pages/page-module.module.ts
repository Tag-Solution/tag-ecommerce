import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ComponentModuleModule } from '../components/component-module.module';






@NgModule({
    declarations: [
        DashBoardComponent,
        PagesComponent,
        AdminComponent,
        HomeComponent,



    ],
    exports: [
        DashBoardComponent

    ],
    imports: [
        CommonModule,
        RouterModule,
        ComponentModuleModule

    ]
})
export class PageModuleModule { }
