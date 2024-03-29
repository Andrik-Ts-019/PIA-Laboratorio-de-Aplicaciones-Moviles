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

  sonido_desproducto(products) {
    let sonido = new Audio;
    sonido.src = products.sound;
    sonido.load();
    sonido.play();
  }

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.products = this.dataService.getProduct();
  }

}
