import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UsuarioService} from './services/usuario.service';
import {ProductoService} from './services/producto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import { ProductosComponent } from './componentes/productos/productos.component';
import { UsuariomodalsComponent } from './modals/usuariomodals/usuariomodals.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { EditarProductoComponent } from './componentes/productos/editar-producto/editar-producto.component';
import { CombosComponent } from './componentes/combos/combos.component';
import { EditarCombosComponent } from './componentes/combos/editar-combos/editar-combos.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ProductosComponent,
    UsuariomodalsComponent,
    EditarProductoComponent,
    CombosComponent,
    EditarCombosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [UsuarioService, ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
