import { NgModule } from '@angular/core';
import { SimulacionLivianosComponent } from './componentes/simulacion-livianos/simulacion-livianos.component';
import { PropuestaLivianosComponent } from './componentes/propuesta-livianos/propuesta-livianos.component';
import { EmisionLivianosComponent } from './componentes/emision-livianos/emision-livianos.component';
import { PropuestaGeneradaLivianosComponent } from './componentes/propuesta-livianos/propuesta-generada-livianos/propuesta-generada-livianos.component';
import { BuscarDocumentosLivianosComponent } from './componentes/simulacion-livianos/buscar-documentos-livianos/buscar-documentos-livianos.component';
import { TarifaLivianosComponent } from './componentes/tarifa-livianos/tarifa-livianos.component';
import { PolizaEmitidaLivianosComponent } from './componentes/emision-livianos/poliza-emitida-livianos/poliza-emitida-livianos.component';
import { SharedCommonModule } from '../../shared/modules/common/shared-common.module';

@NgModule({
  declarations: [
    SimulacionLivianosComponent, 
    PropuestaLivianosComponent, 
    EmisionLivianosComponent, 
    PropuestaGeneradaLivianosComponent, 
    TarifaLivianosComponent,
    BuscarDocumentosLivianosComponent,
    PolizaEmitidaLivianosComponent
  ],
  imports: [
    SharedCommonModule
  ]
})
export class LivianosModule { }