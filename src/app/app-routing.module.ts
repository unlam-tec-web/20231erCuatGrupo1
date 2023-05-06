import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarNuevoProductoComponent } from './componentes/agregar-nuevo-producto/agregar-nuevo-producto.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './componentes/home/home.component';
import { SingInComponent } from './componentes/sing-in/sing-in.component';
import { SingUpComponent } from './componentes/sing-up/sing-up.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path:"layout", component: LayoutComponent},
  {path:"singIn", component: SingInComponent},
  {path:"singUp", component: SingUpComponent},
  {path:"home", component: HomeComponent},
  {path:"carrito", component:AgregarNuevoProductoComponent}, //se tiene que cambiar por el componente de carrito
  {path:"agregarProducto", component:AgregarNuevoProductoComponent},
  {path:"**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
