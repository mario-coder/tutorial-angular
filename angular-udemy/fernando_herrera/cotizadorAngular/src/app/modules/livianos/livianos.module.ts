import { NgModule } from '@angular/core';
import { SimulacionLivianosComponent } from './componentes/simulacion-livianos/simulacion-livianos.component';
import { PropuestaLivianosComponent } from './componentes/propuesta-livianos/propuesta-livianos.component';
import { PropuestaGeneradaLivianosComponent } from './componentes/propuesta-livianos/propuesta-generada-livianos/propuesta-generada-livianos.component';
import { BuscarDocumentosLivianosComponent } from './componentes/simulacion-livianos/buscar-documentos-livianos/buscar-documentos-livianos.component';
import { TarifaLivianosComponent } from './componentes/simulacion-livianos/grilla-tarifas-livianos/celda-tarifa-livianos/celda-tarifa-livianos.component';
import { PolizaEmitidaLivianosComponent } from './componentes/emision-livianos/poliza-emitida-livianos/poliza-emitida-livianos.component';
import { SharedCommonModule } from '../common/shared/shared-common.module';
import { SeleccionTarifasComponent } from './componentes/simulacion-livianos/seleccion-tarifas-livianos/seleccion-tarifas-livianos.component';
import { GrillaTarifasLivianosComponent } from './componentes/simulacion-livianos/grilla-tarifas-livianos/grilla-tarifas-livianos.component';
import { EmisionLivianosComponent } from './componentes/emision-livianos/emision-livianos.component';

@NgModule({
  declarations: [
    SimulacionLivianosComponent, 
    PropuestaLivianosComponent, 
    EmisionLivianosComponent, 
    PropuestaGeneradaLivianosComponent, 
    TarifaLivianosComponent,
    BuscarDocumentosLivianosComponent,
    PolizaEmitidaLivianosComponent,
    SeleccionTarifasComponent,
    GrillaTarifasLivianosComponent
  ],
  imports: [
    SharedCommonModule
  ]
})
export class LivianosModule { }