import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/usuario.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {

  newData: any = {
    email: '',
    password: ''
  };

  error : boolean = false;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    protected httpClient: HttpClient,
    private router: Router) { }

  singInForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  get f() {
    return this.singInForm.controls;
  }

  onSubmit(): void {

    this.newData = {
      email: this.singInForm.controls.email.value!,
      password: this.singInForm.controls.password.value!
    }

    this.userService.authenticateUser(this.newData).subscribe({
      next: (response) => {
        console.log(response.message);
        this.router.navigateByUrl("/home");
      },
      error: (error) => {
        console.error(error.error.message);
        this.error = true;
      }
    });
  }

}
