import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, Validators, FormGroup} from '@angular/forms';
import { DataSendService } from '../service/data-send.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  adicionarValorNome;
  adicionarValorEmail;
  adicionarValorNumero;
  adicionarValorMensagem;
  existe: boolean = false;
  progress : boolean = false;

  constructor(private dataSend: DataSendService,
              ) { }

  
  ngOnInit() {
    this.existe = false;
    
    // this.formularioBuilder = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
  }

  

  onSubmit(form) {
    this.progress = true;
    var formulario = form.value
    var nome = String(formulario.nome);
    var email = String(formulario.email)
    var numero = String(formulario.numero)
    this.dataSend.getUsers().subscribe((data) => {



      data.forEach(cliente => {
        if (cliente.email === email) {
          this.existe = true;
          console.log(this.existe)
        }
      });
    }, (error => { console.log(error) }),
      (() => {  
        if (this.existe === true) {

          let email = document.querySelector('#email');
          email.classList.add('ng-touched');
          email.classList.add('ng-invalid');
          this.existe = false;
        } else {
          this.dataSend.postUser(formulario).subscribe((data) => {
            this.progress == false;

            console.log(data);
            this.adicionarValorNome = null;
            this.adicionarValorEmail = null;
            this.adicionarValorNumero = null;
            this.adicionarValorMensagem = null;


            let formsBorder = [document.querySelector('#nome'),
            document.querySelector('#email'),
            document.querySelector('#numero'),
            document.querySelector('#mensagem')
            ]

            for (const i in formsBorder) {
              if (formsBorder.hasOwnProperty(i)) {
                formsBorder[i].classList.remove('ng-touched');
                formsBorder[i].classList.add('ng-untouched');
              }
            }
          
          });
        }
      }))


  }
}
