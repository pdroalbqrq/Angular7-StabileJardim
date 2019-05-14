import { PageService } from './../../service/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss',
              './header-info-responsive.component.scss']
})
export class HeaderInfoComponent implements OnInit {
  email;
  phone;
  social;

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.getHeaderInfo().subscribe((header: any) => {
      header.forEach(info => {

        this.email = info.email;
        this.phone = info.numero;
        this.social = info.social;

      });

    });
  }

}
