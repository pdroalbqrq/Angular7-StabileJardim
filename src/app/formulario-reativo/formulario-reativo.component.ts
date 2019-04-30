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
  existe = true;
  progress = false;

  erroEmailObrigatorio = 'Informar um e-mail é obrigatório';
  nomeErro = 'Nome precisa ser preenchido e ter mais de 3 letras';
  numeroErro = 'Número é obrigatório';
  mensagemErro = 'A mensagem não pode estar em branco';


  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.email]],
      numero: [null, Validators.required],
      mensagem: [null, Validators.required]
    });

  }
  openSnackBar(message: string, action: string) {

    const config = new MatSnackBarConfig();
    config.panelClass = ['color-snackbar'];
    config.duration = 4000;

    this.snackBar.open(message, action, config);
  }

  onSubmit() {

    const form = this.formulario.value;
    const email = String(form.email);

    if (this.formulario.valid) {
      this.dataSend.getUsers().subscribe((data) => {
        data.forEach(cliente => {
          if (cliente.email === email) {
            this.existe = false;
            console.log(this.existe);

          }
        });
      }, (error => { console.log(error); }),
        () => {
          if (this.existe === false) {
            this.openSnackBar('E-mail já cadastrado', 'Confirmar');
            const emailCss = document.querySelector('#email');
            emailCss.classList.add('ng-touched');
            emailCss.classList.add('ng-invalid');

            this.existe = true;
          } else {
            this.dataSend.postUser(form).subscribe((data) => {
              this.progress = false;
              console.log(data);
              this.formulario.reset();
            });
          }
        });
    } else {
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
  }

  verificaEmail() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors[`email`] && campoEmail.touched;
    }
  }

}
