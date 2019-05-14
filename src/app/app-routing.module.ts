import { AuthGuard } from './guards/auth.guard';
import { CadastroComponent } from './admin/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TesteComponent } from './teste/teste.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'teste', component: TesteComponent },
  {path: 'admin', component: AdminComponent,
   canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent },
  {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
