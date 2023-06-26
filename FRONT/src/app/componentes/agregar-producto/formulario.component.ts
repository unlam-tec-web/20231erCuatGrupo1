import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class AgregarProductoComponent {

  listClasificaciones: Array<any> = ['procesador', 'mother', 'placa de video', 'memoria ram', 'gabinete', 'fuente', 'monitor', 'periferico'];
  listMarcas: Array<any> = ['Razer', 'AMD', 'Intel', 'Gigabyte', 'ASUS', 'AsRock', 'EVGA', 'Cooler Master', 'Corsair'];
  isMensajeMostrado: boolean = false;

  miFormulario: FormGroup = this.fb.group({
    nombre: this.fb.control('', [Validators.required, Validators.minLength(5)]),
    precio: this.fb.control('0', [Validators.required]),
    clasificacion: this.fb.control('', [Validators.required]),
    descripcion: this.fb.control('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private fb: FormBuilder, private productoService: ProductoService) {}

  agregar(){
    const producto = {
      nombre: this.miFormulario.get("nombre")?.value,
      clasificacion: this.miFormulario.get("clasificacion")?.value,
      precio: this.miFormulario.get("precio")?.value,
      descripcion: this.miFormulario.get("descripcion")?.value,
      id: this.miFormulario.get("id")?.value
    };

    this.productoService.agregarProducto(producto).subscribe( res => {
      this.isMensajeMostrado = true;
    });

    this.miFormulario.reset();
  }

  eliminarMensaje(){
    this.isMensajeMostrado = false;
  }

}
