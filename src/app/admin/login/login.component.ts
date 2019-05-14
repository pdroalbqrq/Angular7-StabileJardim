
import { Component, OnInit } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formularioLogin;
  existeEmail = true;
  existeNumero = true;
  progress = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.irParaAdmin();

    this.formularioLogin = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]]
    });


  }


  logar() {
    this.progress = true;
    const form = this.formularioLogin.value;
    const email = String(form.email);
    const senha = String(form.senha);

    if (this.formularioLogin.valid) {

      this.authService.authUser(form);
      this.progress = false;


    }
    this.progress = false;
  }

  verificaValidTouched(campo) {
    return !this.formularioLogin.get(campo).valid && (this.formularioLogin.get(campo).touched || this.formularioLogin.get(campo).dirty);
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
    this.progress = false;
  }

  verificaEmail() {
    const campoEmail = this.formularioLogin.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors[`email`] && campoEmail.dirty;
    }
  }


}
