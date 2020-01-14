import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsultaSimulacionComponent } from "./components/consulta-simulacion/consulta-simulacion.component";
import { HomeCotizadorComponent } from './components/home-cotizador/home-cotizador.component';
import { PropuestaGeneradaLivianosComponent } from './modulos/livianos/componentes/propuesta-generada-livianos/propuesta-generada-livianos.component';
import { PropuestaLivianosComponent } from './modulos/livianos/componentes/propuesta-livianos/propuesta-livianos.component';
import { SimulacionLivianosComponent } from './modulos/livianos/componentes/simulacion-livianos/simulacion-livianos.component';
import { EmisionLivianosComponent } from './modulos/livianos/componentes/emision-livianos/emision-livianos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "consulta-simulacion", component: ConsultaSimulacionComponent }, //, data: {animation: 'isRight'} },
  { path: "simulacion-livianos", component: SimulacionLivianosComponent }, //, data: {animation: 'isRight'} },
  { path: "propuesta-livianos", component: PropuestaLivianosComponent }, //, data: {animation: 'isRight'} },
  { path: "propuesta-generada-livianos", component: PropuestaGeneradaLivianosComponent }, //, data: {animation: 'isRight'} },
  { path: "emision-livianos", component: EmisionLivianosComponent }, //, data: {animation: 'isRight'} },
  { path: "home-cotizador", component: HomeCotizadorComponent }, //, data: {animation: 'isRight'} },
  { path: "**", redirectTo: "home-cotizador" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
