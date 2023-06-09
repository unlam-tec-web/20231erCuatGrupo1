import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/inicio/home.component';
import { SingInComponent } from './componentes/iniciar-sesion/sing-in.component';
import { SingUpComponent } from './componentes/registrar-usuario/sing-up.component';
import { VerifyCodeComponent } from './componentes/verificar-codigo/verify-code.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { AgregarProductoComponent } from './componentes/agregar-producto/formulario.component';
import { CarritoDeComprasComponent } from "./componentes/carrito-de-compras/carrito-de-compras.component";
import {ListaProductosComponent} from "./componentes/lista-productos/lista-productos.component";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path:"singIn", component: SingInComponent},
  {path:"singUp", component: SingUpComponent},
  {path:"verificar", component: VerifyCodeComponent},
  {path:"home", component: HomeComponent},
  {path:"producto/:id", component: DetalleProductoComponent},
  {path:'carrito', component: CarritoDeComprasComponent},
  {path:"agregarProducto", component:AgregarProductoComponent},
  {path:"listaProductos", component:ListaProductosComponent},
  {path:"**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
