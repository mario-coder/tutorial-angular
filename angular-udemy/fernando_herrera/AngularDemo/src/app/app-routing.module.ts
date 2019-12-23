import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarrasComponent } from './components/barras/barras.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { EjemplosComponent } from './components/ejemplos/ejemplos.component';
import { HomeComponent } from './components/home/home.component';
import { CrudComponent } from './components/crud/crud.component';
import { TextoComponent } from './components/texto/texto.component';
import { LoginComponent } from './components/login/login.component';
import { TarifaComponent } from './components/tarifa/tarifa.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ComponentesComponent } from './components/componentes/componentes.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },//, data: {animation: 'isLeft'} },
  { path: 'tecnologias', component: TecnologiasComponent },//, data: {animation: 'isLeft'} },
  { path: 'texto', component: TextoComponent },//, data: {animation: 'isLeft'} },
  { path: 'ejemplos', component: EjemplosComponent },//, data: {animation: 'isLeft'} },
  { path: 'componentes', component: ComponentesComponent },//, data: {animation: 'isLeft'} },
  { path: 'lineas', component: LineaComponent },//, data: {animation: 'isLeft'} },
  { path: 'barras', component: BarrasComponent },//, data: {animation: 'isRight'} },
  { path: 'datatable', component: DatatableComponent },//, data: {animation: 'isRight'} },
  { path: 'crud', component: CrudComponent },//, data: {animation: 'isRight'} },
  { path: 'login', component: LoginComponent },//, data: {animation: 'isRight'} },
  { path: 'dialog', component: DialogComponent },//, data: {animation: 'isRight'} },
  { path: 'formulario', component: FormularioComponent },//, data: {animation: 'isRight'} },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
