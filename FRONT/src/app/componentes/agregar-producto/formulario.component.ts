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
  archivo!: File;

  miFormulario: FormGroup = this.fb.group({
    imagen: this.fb.control('', [Validators.required]),
    nombre: this.fb.control('', [Validators.required, Validators.minLength(5)]),
    precio: this.fb.control('0', [Validators.required]),
    clasificacion: this.fb.control('', [Validators.required]),
    marca: this.fb.control('', [Validators.required]),
    descripcion: this.fb.control('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private fb: FormBuilder, private productoService: ProductoService) {}

  agregar(){
    const data = new FormData();
    data.append("nombre", this.miFormulario.get("nombre")?.value);
    data.append("marca", this.miFormulario.get("marca")?.value);
    data.append("precio", this.miFormulario.get("precio")?.value);
    data.append("descripcion", this.miFormulario.get("descripcion")?.value);
    data.append("id", this.miFormulario.get("id")?.value);
    data.append("clasificacion", this.miFormulario.get("clasificacion")?.value);
    data.append("file", this.archivo);

    this.productoService.agregarProducto(data).subscribe( res => {
      this.isMensajeMostrado = true;
    });

    this.miFormulario.reset();
  }

  eliminarMensaje(){
    this.isMensajeMostrado = false;
  }

  onArchivoSeleccionado(a: any) {
    this.archivo = a.target.files[0];

  }

}
