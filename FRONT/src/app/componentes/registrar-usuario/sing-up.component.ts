import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, share } from 'rxjs';
import { FormBuilder, FormControl, AbstractControl, Validators, ValidationErrors } from '@angular/forms';

// Modelos y servicios
import { User } from '../../interfaces/user';
import { UserService } from '../../services/usuario.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {

  // Modelo nuevo usuario
  users: User[] = [];
  newUser: User = {
    nombre: '',
    apellido: '',
    direccion: '',
    email: '',
    password: ''
  };

  mensaje : String = '';

  ngOnInit(): void{
  }

  // Inyección de dependencias
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              protected httpClient: HttpClient) {}

  // Inicialización de formulario
  singupForm = this.formBuilder.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, this.passwordFormatValidator]),
    confirmPassword: new FormControl('', [Validators.required, this.passwordMatchValidator.bind(this)])
  });

  // Get para acceder a los formControls en la vista
  get f(){
    return this.singupForm.controls;
  }

  // Variables y metodo para mostrar contraseña
  showPassword = false;
  showConfirmPassword = false;

  passwordVisibility(field: string) {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else if (field === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  // Validación formato de contraseña
  passwordFormatValidator(control: AbstractControl): ValidationErrors | null {
    let password: string = control.value;
    let errors: ValidationErrors = {};

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (password) {
      if (password.length < 13)
        errors['quantity'] = true;
      
      if (!uppercaseRegex.test(password))
        errors['uppercase'] = true;
      
      if(!lowercaseRegex.test(password))
        errors['lowercase'] = true;
      
      if(!digitRegex.test(password))
        errors['digit'] = true;
      
      if(!specialCharRegex.test(password))
        errors['specialChar'] = true;
    }
    
    if(Object.keys(errors).length > 0)
      errors['invalidFormat'] = true;

    return errors;
  }

  // Validación de contraseñas coincidentes
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    let password = control.parent?.get('password')?.value;
    let confirmPassword = control.value;

    if (password && confirmPassword) {
      if (password !== confirmPassword) 
        return { NoPasswordMatch: true };
    }

    return null;
  }
  
  // Procesamiento de formulario
  onSubmit(): void {

    // Valores recibidos de nuevo usuario
    this.newUser = { 
      nombre: this.singupForm.controls.firstName.value!, 
      apellido: this.singupForm.controls.lastName.value!, 
      direccion: this.singupForm.controls.address.value!,
      email: this.singupForm.controls.email.value!,
      password: this.singupForm.controls.password.value!
    }

    // Registro de nuevo usuario
    this.userService.createUser(this.newUser).subscribe({
      next: (response: any) => {
        this.mensaje = response.mensaje;
        console.log(this.mensaje);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
    
    this.singupForm.reset();
  }

}