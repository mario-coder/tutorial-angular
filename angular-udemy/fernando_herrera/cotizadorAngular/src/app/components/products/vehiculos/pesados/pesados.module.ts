import { NgModule } from '@angular/core';
import { SharedCommonModule } from 'src/app/components/shared/modules/shared-common.module';
import { SimulacionPesadosComponent } from './components/simulacion-pesados/simulacion-pesados.component';


@NgModule({
  declarations: [
    SimulacionPesadosComponent,


  ],
  imports: [
    SharedCommonModule
  ]
})
export class PesadosModule { }
