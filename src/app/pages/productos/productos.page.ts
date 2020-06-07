import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { product } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  public products: Observable<product[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.products = this.dataService.getProduct();
  }

}
