import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const routes: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: '**', redirectTo: '/listado', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
