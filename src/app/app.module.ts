import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModuleModule } from './components/auth/auth-module.module';
import { PageModuleModule } from './pages/page-module.module';
import { NopageFoundComponent } from './components/nopage-found/nopage-found.component';
import { ModuleSharedModule } from './shared/module-shared/module-shared.module';



@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModuleModule,
    PageModuleModule,
    ModuleSharedModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
