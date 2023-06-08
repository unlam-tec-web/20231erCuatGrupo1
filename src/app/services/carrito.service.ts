import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cartProductos: any[] = [];

  constructor() {
    this.loadCartItemsFromLocalStorage();
  }

  /*GUARDO PRODUCTOS AL LOCALSTORAGE (TIENE QUE HABER UN CAMPO EN USUARIO PARA GUARDAR LOS PRODUCTOS
  DE CARRITO)*/
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
      id: '1',
      name: 'Microprocesador Pc Amd Ryzen 5 4600g 8mb 3.7ghz Socket Am4 100-100000147box 6 Nucleos 12 Hilos',
      price: 99500,
      image: 'https://http2.mlstatic.com/D_NQ_NP_659520-MLM51338788281_082022-O.webp',
      quantity: 1
    };

    const product2 = {
      id: '2',
      name: 'Tclado gamer Redragon Dragonborn K630 QWERTY Redragon Brown inglés US color negro con luz RGB',
      price: 21399,
      image: 'https://http2.mlstatic.com/D_NQ_NP_610174-MLA53970594239_022023-O.webp',
      quantity: 1

    };

    const product3 = {
      id: '3',
      name: 'Memoria RAM Basics color verde 16GB 1 Crucial CB16GU2666',
      price: 22999,
      image: 'https://http2.mlstatic.com/D_NQ_NP_703714-MLA52221527392_102022-O.webp',
      quantity: 1

    };

    this.cartProductos.push(product1, product2, product3);

    this.saveCartItemsToLocalStorage();

  }

  /*DEVUELVO PRODUCTOS DEL CARRITO*/
  getCartProductos(): any[] {
    return this.cartProductos;
  }

  /*AÑADO PRODUCTOS AL CARRITO*/
  addProducto(product: any) {
    const productoExistente = this.cartProductos.find(item => item.id === product.id);

    if (productoExistente) {
      productoExistente.quantity++;
    } else {
      product.quantity = 1;
      this.cartProductos.push(product);
    }
    this.saveCartItemsToLocalStorage();
  }

  /*REMUEVO PRODUCTOS DEL CARRITO*/
  removeDeCarrito(productId: number) {
    const itemIndex = this.cartProductos.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
      this.cartProductos.splice(itemIndex, 1);
      this.saveCartItemsToLocalStorage();

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

  eliminarTodosLosProductos(){
    while (this.cartProductos.length > 0) {
      const productId = this.cartProductos[0].id;
      this.removeDeCarrito(productId);
    }
  }
}
