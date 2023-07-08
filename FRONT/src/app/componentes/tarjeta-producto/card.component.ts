import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  producto: any;
  imagen: string = "";
  precio: string = "";
  nombre: string = "";
  id: number = 0;

  @Output()
  onEliminar: EventEmitter <number> = new EventEmitter();

  constructor(private router: Router, private productoService: ProductoService){}

  formatter = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS'});

  ngOnInit(): void {
    this.nombre = this.producto.nombre;
    this.id = this.producto.id;
    this.precio = this.formatter.format(this.producto.precio);
    this.imagen = this.producto.imagen
    console.log(this.producto);


  }

  verDetalleProducto(): void{
    this.router.navigate(['producto', this.id]);
  }

}
