import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarrasComponent } from './components/barras/barras.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  { path: 'lineas'    , component: LineaComponent, data: {animation: 'isLeft'} },
  { path: 'barras', component: BarrasComponent, data: {animation: 'isRight'} },
  { path: 'formulario', component: FormularioComponent, data: {animation: 'isRight'} },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
