import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { bars } from './Navs/bars';
import { menu } from './Menu/menu';
import { terms } from './Terms';
import { contactus } from './Contactus';
import { donaciones } from './Donaciones';
import { aboutus } from './Aboutus';
import { login } from './Login';
import { SoloAdminComponent } from './solo-admin/solo-admin';



@NgModule({
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations:
  [
    AppComponent,
    bars,
    menu,
    terms,
    contactus,
    donaciones,
    aboutus,
    login,
    SoloAdminComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
