import { Injectable } from '@angular/core';
import { Usuario } from './usuario-model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado = false;
  erro: any;
  private usuario;
  private usuarioFonte = new BehaviorSubject<any>(this.usuario);
  usuarioAtual = this.usuarioFonte.asObservable();

  constructor(private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar ) { }

  config = {
    url: 'http://localhost:3000'
  };

  mudarUsuario(usuario) {
    this.usuarioFonte.next(usuario);
  }

  openSnackBar(message: string, action: string, validar: any, duration: number) {
    const config = new MatSnackBarConfig();
    config.panelClass = (validar ? ['snack-success'] : ['snack-error']);
    config.duration = duration;
    this.snackBar.open(message, action, config);
  }

  authUser(form: any) {
    return this.http.post<Usuario[]>(`${this.config.url}/autenticar`, form).subscribe((data: any) => {

      localStorage.setItem('token', data.token);
      localStorage.setItem('usuario', data.user.id);

      this.validarToken(data);
      this.openSnackBar(`Bem Vindo, ${data.user.nome}` , 'confirmar', true, 2000);

    }, (erro) => {

      this.openSnackBar(erro.error.error, 'confirmar', false, 4000);
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  postUser(form: any) {
    return this.http.get<Usuario[]>(`${this.config.url}/usuario`, form);
  }

  getUsers() {
    return this.http.get<Usuario[]>(`${this.config.url}/usuarios`);
  }

  getUser(id) {
    return this.http.get<Usuario[]>(`${this.config.url}/usuario/${id}`);
  }

  validarToken(user: any) {
    return this.http.get<string[]>(`${this.config.url}/projects`, user).subscribe(async (data: any) => {
      this.usuarioAutenticado = true;
      const token = user.token;
      this.router.navigate(['/admin']);
      this.mudarUsuario(data.userId);

    }, (erro) => {
      this.router.navigate(['login']);
      this.usuarioAutenticado = false;

    });

  }

  usuarioEstaAutenticado() {
    return localStorage.getItem('usuario');
  }

  irParaAdmin() {
    if (localStorage.getItem('usuario')) {
      this.router.navigate(['admin']);
      return true;
    }
    return false;
  }

  handlerErro() {
    return this.erro;
  }

}

