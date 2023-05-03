import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  listClasificaciones: Array<any> = ['alimentos', 'juguetes'];
  isMensajeMostrado: boolean = false;
  archivo!: File;


  miFormulario: FormGroup = this.fb.group({
    nombre: this.fb.control('', [Validators.required, Validators.minLength(5)]),
    precio: this.fb.control('0', [Validators.required]),
    clasificacion: this.fb.control('', [Validators.required]),
    descripcion: this.fb.control('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private fb: FormBuilder) {}


  agregar(){


    this.miFormulario.reset();
  }


  eliminarMensaje(){
    this.isMensajeMostrado = false;
  }


}
