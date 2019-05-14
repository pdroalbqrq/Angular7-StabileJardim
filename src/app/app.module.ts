import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './service/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { NgxMaskModule } from 'ngx-mask';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './service/interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderInfoComponent } from './header/header-info/header-info.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { HomeComponent } from './home/home.component';
import { MiniaturaComponent } from './home/miniatura/miniatura.component';
import { TesteComponent } from './teste/teste.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Card1Component } from './home/card1/card1.component';
import { Card2Component } from './home/card2/card2.component';
import { DataSendService } from './service/data-send.service';
import { FormularioReativoComponent } from './formulario-reativo/formulario-reativo.component';
import { CampoControlErroComponent } from './formulario-reativo/campo-control-erro/campo-control-erro.component';
import { ErrorMsgComponent } from './formulario-reativo/error-msg/error-msg.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { CadastroComponent } from './admin/cadastro/cadastro.component';


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
    FormularioReativoComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    AdminComponent,
    LoginComponent,
    CadastroComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [ DataSendService,
                AuthService,
                AuthGuard,
                { provide: HTTP_INTERCEPTORS,
                  useClass: InterceptorService,
                  multi: true
                },
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
