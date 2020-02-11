import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { PanelModule, InputTextModule } from "primeng";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { SeleccionTarifasComponent } from '../seleccion-tarifas-livianos/seleccion-tarifas.component';
import { GrillaCotizacionesComponent } from '../grilla-cotizaciones/grilla-cotizaciones.component';
import { CeldaCotizacionComponent } from '../grilla-cotizaciones/celda-cotizacion/celda-cotizacion.component';
import { BuscarDocumentosComponent } from 'src/app/components/shared/buscar-documentos/buscar-documentos.component';


@NgModule({
  declarations: [
    SeleccionTarifasComponent,
    GrillaCotizacionesComponent,
    CeldaCotizacionComponent,
    BuscarDocumentosComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AccordionModule,
    PanelModule,
    CardModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    NgxDropzoneModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    TooltipModule,
    CheckboxModule,
    MultiSelectModule
  ],
  exports: [
    BrowserModule,
    CommonModule,
    AccordionModule,
    PanelModule,
    CardModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    NgxDropzoneModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    TooltipModule,
    CheckboxModule,
    MultiSelectModule,
    SeleccionTarifasComponent,
    GrillaCotizacionesComponent,
    CeldaCotizacionComponent,
    BuscarDocumentosComponent
  ],
  providers: [{provide: LOCALE_ID, useValue: "es-Es"}],
})
export class SharedCommonModule { }

