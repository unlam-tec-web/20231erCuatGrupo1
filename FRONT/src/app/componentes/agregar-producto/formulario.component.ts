import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class AgregarProductoComponent {

  listClasificaciones: Array<any> = ['procesador', 'mother', 'placa de video', 'memoria ram', 'gabinete', 'fuente', 'monitor', 'periferico'];
  listMarcas: Array<any> = ['Razer', 'AMD', 'Intel', 'Gigabyte', 'ASUS', 'AsRock', 'EVGA', 'Cooler Master', 'Corsair'];
  isMensajeMostrado: boolean = false;
  imageUrl: SafeResourceUrl | null = null;
  selectedImage: File | null = null;
  error: string = '';


  miFormulario: FormGroup = this.fb.group({
    imagen:this.fb.control(['', [Validators.required, this.validateImage.bind(this)]]),
    nombre: this.fb.control('', [Validators.required, Validators.minLength(5)]),
    precio: this.fb.control('0', [Validators.required]),
    clasificacion: this.fb.control('', [Validators.required]),
    marca: this.fb.control('', [Validators.required]),
    descripcion: this.fb.control('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private fb: FormBuilder, private productoService: ProductoService,private sanitizer: DomSanitizer) {}

  agregar() {
    const formData = new FormData();
    formData.append('imagen', this.miFormulario.get('imagen')?.value);
    formData.append('nombre', this.miFormulario.get('nombre')?.value);
    formData.append('clasificacion', this.miFormulario.get('clasificacion')?.value);
    formData.append('precio', this.miFormulario.get('precio')?.value);
    formData.append('descripcion', this.miFormulario.get('descripcion')?.value);
    formData.append('marca', this.miFormulario.get('marca')?.value);

    this.productoService.agregarProducto(formData).subscribe(res => {
      this.isMensajeMostrado = true;
      this.imageUrl = null;
      this.selectedImage = null;
    });

    this.miFormulario.reset();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          reader.result as string
        );
        this.miFormulario.get('imagen')?.setValue(file); // Establecer el valor del control 'imagen'
      };
    }
  }
  validateImage(control: AbstractControl) {
    const file: File = control.value;
    this.error = '';
    if (file) {
      const fileType = file.type;
      const fileSize = file.size;
      const allowedExtensions = ['image/jpeg', 'image/png', 'image/jpg'];
      const maxFileSize = 10 * 1024 * 1024; // 10MB

      if (!allowedExtensions.includes(fileType)) {
        this.error = 'El archivo no es una imagen válida';
        return {
          invalidExtension: true,
        };
      }

      if (fileSize > maxFileSize) {
        this.error = 'El archivo es demasiado grande';
        return {
          invalidSize: true,
        };
      }
    }

    return null;
  }

  eliminarMensaje(){
    this.isMensajeMostrado = false;
  }

}
