import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  listProductos: Array<any> = []
  isCargando: boolean = true;

  constructor(private productoService: ProductoService){}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void{
    this.productoService.getProductos().subscribe(productos =>{
      this.listProductos = productos
      this.isCargando = false;
    })
  }

  eliminarCard(id: number){
    this.listProductos = this.listProductos.filter(producto => producto.id !== id);
  }

}
