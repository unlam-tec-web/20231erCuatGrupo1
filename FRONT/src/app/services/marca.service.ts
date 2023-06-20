import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MarcaService {

  private baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getMarcas(): Observable<any>{
    return this.http.get(this.baseUrl + "/marca");
  }

}