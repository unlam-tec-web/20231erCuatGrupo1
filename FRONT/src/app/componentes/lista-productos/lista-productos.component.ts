import {Component, OnInit} from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit{

  constructor(private productoService: ProductoService) {
  }
  listProductos: Array<any> = []


  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos().subscribe(productos => {
      this.listProductos = productos
    })
  }

}
