import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PanelModule, InputTextModule } from "primeng";
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { SimulacionComponent } from './componentes/simulacion-livianos/simulacion.component';
import { PropuestaComponent } from './componentes/propuesta-livianos/propuesta-livianos.component';
import { EmisionComponent } from './componentes/emision-livianos/emision-livianos.component';
import { PropuestageneradaComponent } from './componentes/propuesta-generada-livianos/propuesta-generada-livianos.component';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TarifaLivianosComponent } from './componentes/tarifa-livianos/tarifa-livianos.component';

@NgModule({
  declarations: [SimulacionComponent, PropuestaComponent, EmisionComponent, PropuestageneradaComponent, TarifaLivianosComponent],
  imports: [
    BrowserModule,
    CommonModule,
    PanelModule,
    CardModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class LivianosModule { }
