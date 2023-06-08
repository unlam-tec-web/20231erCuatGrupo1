import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarNuevoProductoComponent } from './componentes/agregar-nuevo-producto/agregar-nuevo-producto.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './componentes/home/home.component';
import { SingInComponent } from './componentes/sing-in/sing-in.component';
import { SingUpComponent } from './componentes/sing-up/sing-up.component';
import {CarritoDeComprasComponent} from "./componentes/carrito-de-compras/carrito-de-compras.component";


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path:"singIn", component: SingInComponent},
  {path:"singUp", component: SingUpComponent},
  {path:"home", component: HomeComponent},
  {path:'carrito', component: CarritoDeComprasComponent},
  {path:"agregarProducto", component:AgregarNuevoProductoComponent},
  {path:"**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
