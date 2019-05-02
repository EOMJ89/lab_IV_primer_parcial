import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Reactive Forms
import { ReactiveFormsModule } from "@angular/forms";

// Http
import { HttpClientModule } from "@angular/common/http";

// Componentes
import { ListadoComponent } from "./components/listado/listado.component";
import { GrillaComponent } from "./components/grilla/grilla.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { BotonDeleteComponent } from "./components/boton-delete/boton-delete.component";
import { MenuComponent } from "./components/menu/menu.component";
import { BusquedaComponent } from "./components/busqueda/busqueda.component";
import { BuscarComponent } from "./components/buscar/buscar.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    GrillaComponent,
    FormularioComponent,
    BotonDeleteComponent,
    MenuComponent,
    BusquedaComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
