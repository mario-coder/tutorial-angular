import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsultaSimulacionComponent } from "./components/consulta-simulacion/consulta-simulacion.component";
import { PropuestageneradaComponent } from './modulos/livianos/componentes/propuesta-generada/propuestagenerada.component';
import { HomeCotizadorComponent } from './components/home-cotizador/home-cotizador.component';
import { PropuestaComponent } from './modulos/livianos/componentes/propuesta/propuesta.component';
import { SimulacionComponent } from './modulos/livianos/componentes/simulacion/simulacion.component';
import { EmisionComponent } from './modulos/livianos/componentes/emision/emision.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "consulta-simulacion", component: ConsultaSimulacionComponent }, //, data: {animation: 'isRight'} },
  { path: "simulacion", component: SimulacionComponent }, //, data: {animation: 'isRight'} },
  { path: "propuesta", component: PropuestaComponent }, //, data: {animation: 'isRight'} },
  { path: "propuestagenerada", component: PropuestageneradaComponent }, //, data: {animation: 'isRight'} },
  { path: "emision", component: EmisionComponent }, //, data: {animation: 'isRight'} },
  { path: "home", component: HomeCotizadorComponent }, //, data: {animation: 'isRight'} },
  { path: "login", component: LoginComponent }, //, data: {animation: 'isRight'} },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
