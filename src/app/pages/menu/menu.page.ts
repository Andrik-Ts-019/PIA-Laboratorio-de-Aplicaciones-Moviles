import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { page } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menuPages: Observable<page[]>;  

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.menuPages = this.dataService.getMenuOpc();
  }

}
