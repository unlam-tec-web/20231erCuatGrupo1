import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-card-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{

  @Input()
  categoria: any;
  descripcion: string = "";
  imagenBase64: string = "";
  id: number = 0;

  constructor(private router: Router, private categoriaService: CategoriaService){}

  ngOnInit(): void {
    this.imagenBase64 = this.categoria.imagenBase64
    this.descripcion = this.categoria.descripcion;
    this.id = this.categoria.id;
  }

}