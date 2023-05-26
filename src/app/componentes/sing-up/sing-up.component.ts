import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { emailvalidation } from './emailValidation';
import { Observable, share } from 'rxjs';
import { FormBuilder, FormControl, AbstractControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {

  ngOnInit(): void{
  }

  // Inyección de dependencias
  constructor(private formBuilder: FormBuilder, 
              protected httpClient: HttpClient) {}

  // Inicialización de formulario
  singupForm = this.formBuilder.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, this.passwordFormatValidator]),
    confirmPassword: new FormControl('', [Validators.required, this.passwordMatchValidator])
  });

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
  passwordMatchValidator(): ValidationErrors | null {
    let passwordControl = this.singupForm.controls['password'];
    let confirmPasswordControl = this.singupForm.controls['confirmPassword'];
  
    if (passwordControl && confirmPasswordControl) {
      let password = passwordControl.value;
      let confirmPassword = confirmPasswordControl.value;
  
      if (password !== confirmPassword) {
        confirmPasswordControl.setErrors({ NoPasswordMatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }

    return null;
  }
  
  // Validación de correo a traves de una API
  emailNotExists = false;

  onSubmit() {

    if (this.singupForm.invalid) {
      
    }

    const email = this.singupForm.controls['email'];

    let res: Observable<emailvalidation[]> = 
        this.httpClient.get<emailvalidation[]>("https://emailvalidation.abstractapi.com/v1/?api_key=b7e0590192854e169a7fecbf79323e7d&email=" + email.value)
        .pipe(share());
      
    res.subscribe(
      value => {
        if (value[0].deliverability  === 'DELIVERABLE') {
          this.emailNotExists = false;
        } else {
          this.emailNotExists = true;
        }
      },
      error => {
        console.error('Error al llamar a la API de validación de correo electrónico:', error);
      }
    );

  }

}