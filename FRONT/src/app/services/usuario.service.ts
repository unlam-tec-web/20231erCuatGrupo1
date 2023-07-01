import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl: string = "http://localhost:3000/usuario";

  constructor(private http: HttpClient) { }

  createUser(usuario : any): Observable<any>{
    return this.http.post(this.baseUrl + "/crear", usuario);
  }

  verifyUser(email: any, password : any): Observable<any>{
    return this.http.post(this.baseUrl + "/verificar", email, password);
  }

}