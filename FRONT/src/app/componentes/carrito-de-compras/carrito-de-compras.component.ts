import {Component, OnInit} from '@angular/core';

// Modelos y servicios
import {CarritoService} from '../../services/carrito.service';


@Component({
  selector: 'app-carrito-de-compras',
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent implements OnInit {

  cartProductos!: any[];
  precioTotalCarrito: number = 0;

  // Inyección de dependencias
  constructor(private cartService: CarritoService) {
  }
/*METODO QUE SE EJECUTA AL INICIO DEL COMPONENTE*/
  ngOnInit() {
    this.cargarProductosCarrito();
  }
  /*INSERTO  PRODUCTOS PRECARGADOS AL CARRITO DESDE EL SERVICE*/
  preCargarProductos(){
    this.cartService.precargaDeProductos();
  }
/* DEVUELVE LOS PRODUCTOS EN CARRITO*/
  cargarProductosCarrito() {
    this.cartProductos = this.cartService.getCartProductos();
  }
/*INCREMENTA LA CANTIDAD DE UN PRODUCTO*/
  incrementarCantidad(id: number) {
    this.cartService.incrementarCantidad(id);
    this.calcularPrecioTotal();
  }
  /*DISMINUYE LA CANTIDAD DE UN PRODUCTO*/

  disminuirCantidad(id: number) {
    this.cartService.disminuirCantidad(id);
    this.calcularPrecioTotal();
  }
  /*ELIMINA UN PRODUCTO UN PRODUCTO*/
  removeDeCarrito(id: number) {
    this.cartService.removeDeCarrito(id);
    this.calcularPrecioTotal();
  }
/*DEVUELVE EL PRECIO TOTAL DEL CARRITO*/
  getTotalCarrito() {
    this.calcularPrecioTotal();
    return this.precioTotalCarrito;
  }
/*CALCULA EL PRECIO DEL CARRITO*/
  calcularPrecioTotal(): void {
    const productos = this.cartService.getCartProductos();
    this.precioTotalCarrito = productos.reduce((total, item) => total + (item.precio * item.quantity), 0);

  }

  eliminarProductos(){
    this.cartService.eliminarTodosLosProductos();
  }
}