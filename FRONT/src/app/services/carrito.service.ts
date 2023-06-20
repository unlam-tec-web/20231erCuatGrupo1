import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cartProductos: any[] = [];
  private cantidadProductosCarrito: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  constructor() {
    this.loadCartItemsFromLocalStorage();
  }

  /*GUARDO PRODUCTOS AL LOCALSTORAGE*/
  private saveCartItemsToLocalStorage(): void {
    localStorage.setItem('cartProductos', JSON.stringify(this.cartProductos));
  }

  /*CARGO PRODUCTOS DESDE EL LOCALSTORAGE*/
  private loadCartItemsFromLocalStorage(): void {
    const savedCartItems = localStorage.getItem('cartProductos');
    if (savedCartItems) {
      this.cartProductos = JSON.parse(savedCartItems);
    }
  }

  /*INSERTO  PRODUCTOS PRECARGADOS AL CARRITO*/
  precargaDeProductos(): void {
    const product1 = {
      /*EL CAMPO CANTIDAD SE TRANSFORMA EN 1 CUANDO SE AÑADE A CARRITO, COMO NO USO ADDPRODUCTOACARRITO LO TENGO
QUE PONER MANUALMENTE*/
      id: '1',
      descripcion: '',
      nombre: 'Microprocesador Pc Amd Ryzen 5 4600g 8mb 3.7ghz Socket Am4 100-100000147box 6 Nucleos 12 Hilos',
      precio: 99500,
      clasificacion: 'Procesador',
      quantity: 1,
      img: 'https://http2.mlstatic.com/D_NQ_NP_659520-MLM51338788281_082022-O.webp'
    };

    const product2 = {
      id: '2',
      descripcion: '',
      nombre: 'Tclado gamer Redragon Dragonborn K630 QWERTY Redragon Brown inglés US color negro con luz RGB',
      precio: 21399,
      clasificacion: 'Periferico',
      quantity: 1,
      img: 'https://http2.mlstatic.com/D_NQ_NP_610174-MLA53970594239_022023-O.webp'

    };

    const product3 = {
      id: '3',
      descripcion: '',
      nombre: 'Memoria RAM Basics color verde 16GB 1 Crucial CB16GU2666',
      precio: 22999,
      clasificacion: 'Memoria RAM',
      quantity: 1,
      img: 'https://http2.mlstatic.com/D_NQ_NP_703714-MLA52221527392_102022-O.webp'
    };

    this.cartProductos.push(product1, product2, product3);

    this.saveCartItemsToLocalStorage();

  }

  /*DEVUELVO PRODUCTOS DEL CARRITO*/
  getCartProductos(): any[] {
    return this.cartProductos;
  }

  /*AÑADO PRODUCTOS AL CARRITO*/
  addProductoACarrito(product: any) {
    /* const productoExistente = this.cartProductos.find(item => item.id === product.id);

     if (productoExistente) {
       productoExistente.quantity++;
     } else {
       /!*PONGO EL VALOR DE CANTIDAD EN 1, CUANDO SE ENFECTUA LA COMPRA RESTO ESTE VALOR AL QUE SE LE ENCUENTRA EN LA BASE
       * DE DATOS DEL MISMO PRODUCTO*!/
       product.quantity = 1;*/
    this.cartProductos.push(product);
    /*
        }
    */
    this.saveCartItemsToLocalStorage();
    this.cantidadProductosCarrito.next(this.cartProductos.length);

  }

  /*REMUEVO PRODUCTOS DEL CARRITO*/
  removeDeCarrito(productId: number) {
    const itemIndex = this.cartProductos.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
      this.cartProductos.splice(itemIndex, 1);
      this.saveCartItemsToLocalStorage();
      this.cantidadProductosCarrito.next(this.cartProductos.length);


    }
  }

  /*INCREMENTO LA CANTIDAD DEL PRODUCTO*/
  incrementarCantidad(productId: number) {
    const producto = this.cartProductos.find(item => item.id === productId);

    if (producto) {
      producto.quantity++;
      this.saveCartItemsToLocalStorage();

    }
  }

  /*DISMINUYO LA CANTIDAD DEL PRODUCTO*/
  disminuirCantidad(productId: number) {
    const producto = this.cartProductos.find(item => item.id === productId);

    if (producto) {
      if (producto.quantity > 1) {
        producto.quantity--;
        this.saveCartItemsToLocalStorage();

      } else {
        this.removeDeCarrito(productId);
        this.saveCartItemsToLocalStorage();

      }
    }
  }

  getCantidadProductosCarrito(): BehaviorSubject<number> {
    return this.cantidadProductosCarrito;
  }

  /*ELIMINA TODOS LOS PRODUCTOS*/
  eliminarTodosLosProductos() {
    while (this.cartProductos.length > 0) {
      const productId = this.cartProductos[0].id;
      this.removeDeCarrito(productId);
    }
  }
}
