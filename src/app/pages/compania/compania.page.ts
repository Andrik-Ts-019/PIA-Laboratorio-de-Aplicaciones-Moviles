import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { compania } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-compania',
  templateUrl: './compania.page.html',
  styleUrls: ['./compania.page.scss'],
})
export class CompaniaPage implements OnInit {

  public company: Observable<compania[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.company = this.dataService.getDataCompany();
  }

}
