import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss',
    './navbar-responsivo.component.scss']
})
export class NavbarComponent implements OnInit {

  menuResponsivo = false;

  constructor() {
    const largura = window.innerWidth;
    if (largura <= 700) {
      this.menuResponsivo = true;
    }
  }

  ngOnInit() {

  }

}
