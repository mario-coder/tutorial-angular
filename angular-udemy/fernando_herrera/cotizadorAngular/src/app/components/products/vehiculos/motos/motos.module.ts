import { NgModule } from '@angular/core';
import { SharedCommonModule } from 'src/app/components/shared/modules/shared-common.module';
import { SimulacionMotosComponent } from './components/simulacion-motos/simulacion-motos.component';



@NgModule({
  declarations: [SimulacionMotosComponent],
  imports: [
    SharedCommonModule
  ]
})
export class MotosModule { }
