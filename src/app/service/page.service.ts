import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeaderInfo } from './headerInfo-model';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  config = {
    url: 'http://localhost:3000'
  };

  constructor(private http: HttpClient,
    private router: Router) { }

    getHeaderInfo() {
      return this.http.get<HeaderInfo[]>(`${this.config.url}/cabecalhos`);
    }

    alterHeaderInfo(id, form) {
      return this.http.put<HeaderInfo[]>(`${this.config.url}/cabecalho/${id}`, form);
    }
}
