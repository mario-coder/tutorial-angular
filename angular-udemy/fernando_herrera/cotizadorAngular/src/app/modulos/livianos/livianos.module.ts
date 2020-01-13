import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulacionComponent } from './componentes/simulacion/simulacion.component';
import { PropuestaComponent } from './componentes/propuesta/propuesta.component';
import { EmisionComponent } from './componentes/emision/emision.component';



@NgModule({
  declarations: [SimulacionComponent, PropuestaComponent, EmisionComponent],
  imports: [
    CommonModule
  ]
})
export class LivianosModule { }
