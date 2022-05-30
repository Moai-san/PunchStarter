import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { bars } from './Navs/bars';
import { menu } from './Menu/menu';
import { terms } from './Terms';
import { contactus } from './Contactus';
import { donaciones } from './Donaciones';



@NgModule({
  imports:
  [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations:
  [
    AppComponent,
    bars,
    menu,
    terms,
    contactus,
    donaciones
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
