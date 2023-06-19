import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit{

  producto: any = "";
  id: number = 0;
  descripcion: string = '';
  nombre: string = '';
  precio: number = 0;
  clasificacion: string = '';

  constructor(
    private aRoute: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router,
    private carritoService: CarritoService
  ) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getProducto();
    console.log(this.producto);

  }


  getProducto() {
    this.productoService.getProducto(this.id).subscribe((producto) => {
      this.nombre = producto.nombre;
      this.clasificacion = producto.clasificacion;
      this.descripcion = producto.descripcion;
      this.precio = producto.precio;
      this.producto = producto;
    });
  }

  agregarAlCarrito() {
      this.carritoService.addProductoACarrito(this.producto);
  }


}
