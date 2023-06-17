import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  producto:any;
  precio: number = 0;
  nombre: string = "";
  id: number = 0;
  @Output()
  onEliminar: EventEmitter <number> = new EventEmitter();

  constructor(private router: Router, private productoService: ProductoService){
  }

  ngOnInit(): void {
    this.nombre = this.producto.nombre;
    this.id = this.producto.id;
    this.precio = this.producto.precio;

  }

  verDetalleProducto(): void{
    this.router.navigate(['producto', this.id]);
  }

  eliminarProducto(): void{
    this.productoService.eliminarProducto(this.id).subscribe(resp =>{
      console.log(resp);
    })
    this.onEliminar.emit(this.id);
  }

  editarProducto(){
    this.router.navigate(['editar', this.id]);
  }

}
