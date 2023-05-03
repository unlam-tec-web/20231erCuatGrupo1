import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarritoDeComprasComponent} from "./componentes/carrito-de-compras/carrito-de-compras.component";

const routes: Routes = [
  {path:'cart', component: CarritoDeComprasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
