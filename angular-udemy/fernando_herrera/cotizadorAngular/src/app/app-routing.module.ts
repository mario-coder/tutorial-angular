import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { ConsultaSimulacionComponent } from './components/common/consultas/consulta-simulacion/consulta-simulacion.component';
import { SimulacionLivianosComponent } from './components/products/vehiculos/livianos/components/simulacion-livianos/simulacion-livianos.component';
import { PropuestaLivianosComponent } from './components/products/vehiculos/livianos/components/propuesta-livianos/propuesta-livianos.component';
import { PropuestaGeneradaLivianosComponent } from './components/products/vehiculos/livianos/components/propuesta-livianos/propuesta-generada-livianos/propuesta-generada-livianos.component';
import { PolizaEmitidaLivianosComponent } from './components/products/vehiculos/livianos/components/emision-livianos/poliza-emitida-livianos/poliza-emitida-livianos.component';
import { EmisionLivianosComponent } from './components/products/vehiculos/livianos/components/emision-livianos/emision-livianos.component';
import { HomeCotizadorComponent } from './components/common/home-cotizador/home-cotizador.component';
import { LoginComponent } from './components/common/login/login.component';
import { SimulacionPesadosComponent } from './components/products/vehiculos/pesados/components/simulacion-pesados/simulacion-pesados.component';
import { SimulacionMotosComponent } from './components/products/vehiculos/motos/components/simulacion-motos/simulacion-motos.component';
import { SimulacionHogarComponent } from './components/products/inmobiliario/hogar/components/simulacion-hogar/simulacion-hogar.component';
import { ConsultaProduccionComponent } from './components/common/consultas/consulta-produccion/consulta-produccion.component';


const routes: Routes = [
  { path: "consulta-simulacion", component: ConsultaSimulacionComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "consulta-produccion", component: ConsultaProduccionComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "simulacion-livianos", component: SimulacionLivianosComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "propuesta-livianos", component: PropuestaLivianosComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "propuesta-generada-livianos", component: PropuestaGeneradaLivianosComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "poliza-emitida-livianos", component: PolizaEmitidaLivianosComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "emision-livianos", component: EmisionLivianosComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "simulacion-pesados", component: SimulacionPesadosComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "simulacion-motos", component: SimulacionMotosComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "simulacion-hogar", component: SimulacionHogarComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "home-cotizador", component: HomeCotizadorComponent, canActivate: [AuthGuard] }, //, data: {animation: 'isRight'} },
  { path: "login", component: LoginComponent }, //, data: {animation: 'isRight'} },
  { path: "**", redirectTo: "home-cotizador" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
