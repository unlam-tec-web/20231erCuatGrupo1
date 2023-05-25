import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {

  ngOnInit(): void{
  }

  showPassword = false;
  showConfirmPassword = false;

  passwordVisibility(field: string) {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else if (field === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  formSingup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formSingup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName:  ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  get firstNameInvalid(): boolean {
    const control = this.formSingup.controls['firstName'];
    return control.invalid && control.touched;
  }

  get lastNameInvalid(): boolean {
    const control = this.formSingup.controls['lastName'];
    return control.invalid && control.touched;
  }

  onSubmit() {

    if (this.formSingup.invalid) {
      
    }

  }

}