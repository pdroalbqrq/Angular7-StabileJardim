import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataSendService } from '../service/data-send.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-formulario-reativo',
  templateUrl: './formulario-reativo.component.html',
  styleUrls: ['./formulario-reativo.component.scss']
})
export class FormularioReativoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private dataSend: DataSendService,
    private snackBar: MatSnackBar) { }

  formulario;
  existeEmail = true;
  existeNumero = true;
  progress = false;

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.email]],
      numero: [null, [Validators.required, Validators.minLength(11)]],
      mensagem: [null, Validators.required]
    });

  }
  openSnackBar(message: string, action: string, validar: any) {
    const config = new MatSnackBarConfig();
    config.panelClass = (validar ? ['snack-success'] : ['snack-error']);
    config.duration = 4000;
    this.snackBar.open(message, action, config);
  }

  onSubmit() {
    this.progress = true;
    const form = this.formulario.value;
    const email = String(form.email);
    const numero = String(form.numero);

    if (this.formulario.valid) {
      this.dataSend.getUserEmailNumber(email, numero).subscribe((data) => {

        if (data.length) {
          if (data[0].email === email) {
            console.log(data);
            this.existeEmail = false;
          }
          if (data[0].numero === numero) {
            console.log(data);
            this.existeNumero = false;
          }
        }
      }, (error => { console.log(error); }),
        () => {
          if (this.existeEmail === false) {

            this.openSnackBar('E-mail já cadastrado', 'Confirmar', this.existeEmail);
            const emailCss = document.querySelector('#email');
            emailCss.classList.add('ng-touched');
            emailCss.classList.add('ng-invalid');

            this.existeEmail = true;
            this.progress = false;
          } else if (this.existeNumero === false) {
            this.openSnackBar('Número já cadastrado', 'Confirmar', this.existeNumero);
            const numeroCss = document.querySelector('#numero');
            numeroCss.classList.add('ng-touched');
            numeroCss.classList.add('ng-invalid');

            this.existeEmail = true;
            this.progress = false;
          } else {
            this.dataSend.postUser(form).subscribe((data) => {
              this.progress = false;
              console.log(data);
              this.formulario.reset();
              this.openSnackBar('Obrigado, entraremos em contato', 'Confirmar', this.existeNumero);
            });
          }
        });
    } else {
      console.log('inválido');
      this.verificaValidacoesForm(this.formulario);
    }
  }




  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
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
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors[`email`] && campoEmail.dirty;
    }
  }

}
