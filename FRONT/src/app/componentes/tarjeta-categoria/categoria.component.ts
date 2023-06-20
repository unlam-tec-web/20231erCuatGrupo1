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
  id: number = 0;

  constructor(private router: Router, private categoriaService: CategoriaService){}

  ngOnInit(): void {
    this.descripcion = this.categoria.descripcion;
    this.id = this.categoria.id;
  }

}