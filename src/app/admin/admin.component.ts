import { PageService } from './../service/page.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataSendService } from '../service/data-send.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  validar;
  usuario = { id: localStorage.getItem('usuario'), nome: '', email: '' };
  info = { id: 1, email: '', numero: '', social: '' };

  constructor(private authService: AuthService,
    private pageService: PageService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.authService.getUser(localStorage.getItem('usuario')).subscribe((user: any) => {
        this.usuario = user;
    });

    this.pageService.getHeaderInfo().subscribe((header: any) => {
      header.forEach((info: any) => {
        this.info = info;
      });
    });
  }

  openSnackBar(message: string, action: string, validar: any) {
    const config = new MatSnackBarConfig();
    config.panelClass = (validar ? ['snack-success'] : ['snack-error']);
    config.duration = 4000;
    this.snackBar.open(message, action, config);
  }

  logout() {
    this.authService.logout();
  }


  confirmarFormulario(form) {
    this.pageService.alterHeaderInfo(1, form.value).subscribe((data: any) => {
      this.validar = true;
      form.reset();
      this.openSnackBar('Página renovada, parabéns!', 'Continuar', this.validar);
    }, (err) => {
      console.log(err);
      this.validar = false;
      this.openSnackBar('não foi possível enviar o formulário', 'tentar novamente', this.validar);
    });
  }

}
