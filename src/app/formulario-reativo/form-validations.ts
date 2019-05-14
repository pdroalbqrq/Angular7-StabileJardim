import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations{

  static getErrorMsg(nomeCampo: string, nomeValidacao: string, valorValidacao?) {
    const config = {
      required: `${nomeCampo} é obrigatório.`,
      minlength: `${nomeCampo} precisa ter no mínimo ${valorValidacao.requiredLength} caracteres`,
      maxlength: `${nomeCampo} precisa ter no máximo ${valorValidacao.requiredLength} caracteres`,
      email: `Digite um E-mail válido`
    };
    return config[nomeValidacao];
  }

}
