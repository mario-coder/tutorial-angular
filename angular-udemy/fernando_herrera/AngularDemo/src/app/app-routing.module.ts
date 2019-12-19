import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarrasComponent } from './components/barras/barras.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { EjemplosComponent } from './components/ejemplos/ejemplos.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },//, data: {animation: 'isLeft'} },
  { path: 'ejemplos', component: EjemplosComponent },//, data: {animation: 'isLeft'} },
  { path: 'lineas', component: LineaComponent },//, data: {animation: 'isLeft'} },
  { path: 'barras', component: BarrasComponent },//, data: {animation: 'isRight'} },
  { path: 'datatable', component: DatatableComponent },//, data: {animation: 'isRight'} },
  { path: 'formulario', component: FormularioComponent },//, data: {animation: 'isRight'} },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
