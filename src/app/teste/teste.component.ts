import { Component, OnInit } from '@angular/core';
import { DataSendService } from '../service/data-send.service';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {
  carregar: boolean = true;
  clientes;
  constructor(private dataSend: DataSendService) { }

  ngOnInit() {
    this.carregar = true;
   this.dataSend.getUsers().subscribe((data)=>{this.clientes = data; this.carregar = false});
  }

}
