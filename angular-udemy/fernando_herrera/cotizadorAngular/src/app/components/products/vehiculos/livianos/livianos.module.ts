import { NgModule } from '@angular/core';

import { SharedCommonModule } from 'src/app/components/shared/modules/shared-common.module';
import { SimulacionLivianosComponent } from './components/simulacion-livianos/simulacion-livianos.component';
import { PropuestaLivianosComponent } from './components/propuesta-livianos/propuesta-livianos.component';
import { EmisionLivianosComponent } from './components/emision-livianos/emision-livianos.component';
import { PropuestaGeneradaLivianosComponent } from './components/propuesta-livianos/propuesta-generada-livianos/propuesta-generada-livianos.component';
import { BuscarDocumentosLivianosComponent } from './components/simulacion-livianos/buscar-documentos-livianos/buscar-documentos-livianos.component';
import { TarifaLivianosComponent } from 'src/app/components/shared/grilla-cotizaciones/celda-cotizacion/celda-cotizacion.component';
import { PolizaEmitidaLivianosComponent } from './components/emision-livianos/poliza-emitida-livianos/poliza-emitida-livianos.component';
import { SeleccionTarifasComponent } from 'src/app/components/shared/seleccion-tarifas-livianos/seleccion-tarifas.component';
import { GrillaTarifasLivianosComponent } from 'src/app/components/shared/grilla-cotizaciones/grilla-cotizaciones.component';

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