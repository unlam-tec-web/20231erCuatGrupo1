import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
  selector: 'app-card-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit{

  @Input()
  marca: any;
  descripcion: string = "";
  imagenBase64: string = "";
  id: number = 0;

  constructor(private router: Router, private marcaService: MarcaService){}

  ngOnInit(): void {
    this.imagenBase64 = this.marca.imagenBase64
    this.descripcion = this.marca.descripcion;
    this.id = this.marca.id;
  }

}
