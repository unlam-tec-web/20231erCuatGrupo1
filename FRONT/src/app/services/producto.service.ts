import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  private baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  getProducto(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  agregarProducto(producto: any): Observable<any>{
    return this.http.post(this.baseUrl, producto);
  }

}
