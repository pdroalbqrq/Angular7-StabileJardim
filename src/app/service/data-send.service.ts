import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente-model';
@Injectable({
  providedIn: 'root'
})
export class DataSendService {

  constructor(private http: HttpClient) { }

  config = {
    url: 'http://localhost:3000'
  };


  getUsers() {
    return this.http.get<Cliente[]>(`${this.config.url}/clientes`);
  }

  getOneUser(name: string) {
    return this.http.get<Cliente[]>(`${this.config.url}/clientes/nome/${name}`);
  }

  getOneNumber(num: string) {
    return this.http.get<Cliente[]>(`${this.config.url}/clientes/numero/${num}`);
  }


  getUserEmailNumber(email: string, num?: string) {
    return this.http.get<Cliente[]>(`${this.config.url}/clientes/verificar/${email}/${num}`);
  }

  postUser(form: any) {
    return this.http.post<Cliente[]>(`${this.config.url}/cliente`, form);
  }

}
