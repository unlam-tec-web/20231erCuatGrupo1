import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarNuevoProductoComponent } from './componentes/agregar-nuevo-producto/agregar-nuevo-producto.component';

const routes: Routes = [
  {path: "", redirectTo: "", pathMatch: "full"},
  {path:"carrito", component:AgregarNuevoProductoComponent}, //se tiene que cambiar por el componente de carrito
  {path:"agregarProducto", component:AgregarNuevoProductoComponent},
  {path:"**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
