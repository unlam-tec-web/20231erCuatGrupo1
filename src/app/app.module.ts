// Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes principales
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

// Otros componentes
import { SingUpComponent } from './componentes/sing-up/sing-up.component';
import { SingInComponent } from './componentes/sing-in/sing-in.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { CarritoDeComprasComponent } from './componentes/carrito-de-compras/carrito-de-compras.component';
import { AgregarNuevoProductoComponent } from './componentes/agregar-nuevo-producto/agregar-nuevo-producto.component';

// Servicios
import { UserService } from './services/usuario.service';
import {CarritoService} from "./services/carrito.service";


@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    SingUpComponent,
    AgregarNuevoProductoComponent,
    CarritoDeComprasComponent,
    NavbarComponent,
    FooterComponent,
    FormularioComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService,
  CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
