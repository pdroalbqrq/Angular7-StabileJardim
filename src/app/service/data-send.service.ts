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
  }

  ngOnInit() {
  }

  getUsers() {
    return this.http.get<Cliente[]>(`${this.config.url}/clientes`);
  }

  getOneUser(name: string) {
    return this.http.get<Cliente[]>(`${this.config.url}/clientes/nome/${name}`);
  }

  getOneNumber(number: string) {
    return this.http.get<Cliente[]>(`${this.config.url}/clientes/numero/${number}`);
  }


  getUserEmail(email: string) {
    return this.http.get<Cliente[]>(`${this.config.url}/clientes/email/${email}`);
  }

  postUser(form: any) {
    return this.http.post<Cliente[]>(`${this.config.url}/cliente`, form);
  }

}
