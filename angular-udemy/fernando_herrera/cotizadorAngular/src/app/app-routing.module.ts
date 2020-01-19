import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsultaSimulacionComponent } from "./components/consulta-simulacion/consulta-simulacion.component";
import { HomeCotizadorComponent } from './components/home-cotizador/home-cotizador.component';
import { PropuestaGeneradaLivianosComponent } from './modulos/livianos/componentes/propuesta-generada-livianos/propuesta-generada-livianos.component';
import { PropuestaLivianosComponent } from './modulos/livianos/componentes/propuesta-livianos/propuesta-livianos.component';
import { SimulacionLivianosComponent } from './modulos/livianos/componentes/simulacion-livianos/simulacion-livianos.component';
import { EmisionLivianosComponent } from './modulos/livianos/componentes/emision-livianos/emision-livianos.component';
import { PolizaEmitidaLivianosComponent } from './modulos/livianos/componentes/poliza-emitida-livianos/poliza-emitida-livianos.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "consulta-simulacion", component: ConsultaSimulacionComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "simulacion-livianos", component: SimulacionLivianosComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "propuesta-livianos", component: PropuestaLivianosComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "propuesta-generada-livianos", component: PropuestaGeneradaLivianosComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "poliza-emitida-livianos", component: PolizaEmitidaLivianosComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "emision-livianos", component: EmisionLivianosComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "home-cotizador", component: HomeCotizadorComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "home", component: AppComponent }, //, data: {animation: 'isRight'} },
  { path: "login", component: LoginComponent }, //, data: {animation: 'isRight'} },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
