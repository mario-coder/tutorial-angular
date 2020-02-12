import { NgModule } from '@angular/core';
import { SharedCommonModule } from 'src/app/components/shared/modules/shared-common.module';
import { SimulacionHogarComponent } from './components/simulacion-hogar/simulacion-hogar.component';



@NgModule({
  declarations: [SimulacionHogarComponent],
  imports: [
    SharedCommonModule
  ]
})
export class HogarModule { }
