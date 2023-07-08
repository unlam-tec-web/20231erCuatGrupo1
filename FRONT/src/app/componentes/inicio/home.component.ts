import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/services/marca.service';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listMarcas: Array<any> = []
  listProductos: Array<any> = []
  listCategorias: Array<any> = []
  isCargando: boolean = true;

  bannerImages: string[] = [
    "../../assets/img/banner1.jpg",
    "../../assets/img/banner2.jpeg",
    "../../assets/img/banner3.jpeg"
  ];

  constructor(private productoService: ProductoService, private marcaService: MarcaService, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.getProductos();
    this.getMarcas();
    this.getCategorias();
  }

  getProductos(): void {
    this.productoService.getProductos().subscribe(productos => {
      this.listProductos = productos;
      this.isCargando = false;
      this.listProductos = this.listProductos.slice(-4); // Limitar a los últimos 4 productos

    });
  }

  cantidadDeProductos(){

  }
  getMarcas(): void {
    this.marcaService.getMarcas().subscribe(marcas => {
      this.listMarcas = marcas
      this.isCargando = false;
    })
  }

  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe(categorias => {
      this.listCategorias = categorias
      this.isCargando = false;
    })
  }

}
