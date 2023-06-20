import {Component, OnInit} from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cantidadProducCarrito:number=0;

  constructor(private cartService: CarritoService) {
  }

  ngOnInit() {
    this.cartService.getCantidadProductosCarrito().subscribe(cantidad => {
      this.cantidadProducCarrito = cantidad;
    });
  }


}
