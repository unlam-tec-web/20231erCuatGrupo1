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

  /*DEVUELVO PRODUCTOS DEL CARRITO*/
  getCartProductos(): any[] {
    return this.cartProductos;
  }

  /*AÑADO PRODUCTOS AL CARRITO*/
  addProductoACarrito(product: any) {
     const productoExistente = this.cartProductos.find(item => item.id === product.id);

     if (productoExistente) {
       productoExistente.stock++;
     } else {
       product.stock = 1;
    this.cartProductos.push(product);

        }

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
      producto.stock++;
      this.saveCartItemsToLocalStorage();

    }
  }

  /*DISMINUYO LA CANTIDAD DEL PRODUCTO*/
  disminuirCantidad(productId: number) {
    const producto = this.cartProductos.find(item => item.id === productId);

    if (producto) {
      if (producto.stock > 1) {
        producto.stock--;
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

/*  /!*ELIMINA TODOS LOS PRODUCTOS*!/
  eliminarTodosLosProductos() {
    while (this.cartProductos.length > 0) {
      const productId = this.cartProductos[0].id;
      this.removeDeCarrito(productId);
    }
  }*/
}
