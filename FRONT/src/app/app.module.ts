// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { HomeComponent } from './componentes/inicio/home.component';
import { SingUpComponent } from './componentes/registrar-usuario/sing-up.component';
import { SingInComponent } from './componentes/iniciar-sesion/sing-in.component';
import { CardComponent } from './componentes/tarjeta-producto/card.component';
import { MarcaComponent } from './componentes/tarjeta-marca/marca.component';
import { CategoriaComponent } from './componentes/tarjeta-categoria/categoria.component';
import { VerifyCodeComponent } from './componentes/verificar-codigo/verify-code.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { AgregarProductoComponent } from './componentes/agregar-producto/formulario.component';
import { CarritoDeComprasComponent } from './componentes/carrito-de-compras/carrito-de-compras.component';

// Servicios
import { UserService } from './services/usuario.service';
import { CarritoService } from "./services/carrito.service";
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    SingUpComponent,
    VerifyCodeComponent,
    AgregarProductoComponent,
    CarritoDeComprasComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    DetalleProductoComponent,
    HomeComponent,
    CardComponent,
    MarcaComponent,
    CategoriaComponent,
    ListaProductosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
