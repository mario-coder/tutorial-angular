import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { ConsultaSimulacionComponent } from './components/common/consulta-simulacion/consulta-simulacion.component';
import { SimulacionLivianosComponent } from './components/products/vehiculos/livianos/components/simulacion-livianos/simulacion-livianos.component';
import { PropuestaLivianosComponent } from './components/products/vehiculos/livianos/components/propuesta-livianos/propuesta-livianos.component';
import { PropuestaGeneradaLivianosComponent } from './components/products/vehiculos/livianos/components/propuesta-livianos/propuesta-generada-livianos/propuesta-generada-livianos.component';
import { PolizaEmitidaLivianosComponent } from './components/products/vehiculos/livianos/components/emision-livianos/poliza-emitida-livianos/poliza-emitida-livianos.component';
import { EmisionLivianosComponent } from './components/products/vehiculos/livianos/components/emision-livianos/emision-livianos.component';
import { HomeCotizadorComponent } from './components/common/home-cotizador/home-cotizador.component';
import { LoginComponent } from './components/common/login/login.component';


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
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
