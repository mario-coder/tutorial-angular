import { NgModule } from '@angular/core';
import { SimulacionLivianosComponent } from './componentes/simulacion-livianos/simulacion-livianos.component';
import { PropuestaLivianosComponent } from './componentes/propuesta-livianos/propuesta-livianos.component';
import { EmisionLivianosComponent } from './componentes/emision-livianos/emision-livianos.component';
import { PropuestaGeneradaLivianosComponent } from './componentes/propuesta-generada-livianos/propuesta-generada-livianos.component';
import { TarifaLivianosComponent } from './componentes/tarifa-livianos/tarifa-livianos.component';
import { SharedModule } from '../../shared/modules/common/shared.module';

@NgModule({
  declarations: [
    SimulacionLivianosComponent, 
    PropuestaLivianosComponent, 
    EmisionLivianosComponent, 
    PropuestaGeneradaLivianosComponent, 
    TarifaLivianosComponent
  ],
  imports: [
    SharedModule
  ]
})
export class LivianosModule { }
