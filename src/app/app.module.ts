import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderInfoComponent } from './header/header-info/header-info.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { HomeComponent } from './home/home.component';
import { MiniaturaComponent } from './home/miniatura/miniatura.component';
import { TesteComponent } from './teste/teste.component';
import { FormsModule } from '@angular/forms'
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Card1Component } from './home/card1/card1.component';
import { Card2Component } from './home/card2/card2.component';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderInfoComponent,
    HeaderLogoComponent,
    HomeComponent,
    MiniaturaComponent,
    TesteComponent,
    FooterComponent,
    HeaderComponent,
    Card1Component,
    Card2Component,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
