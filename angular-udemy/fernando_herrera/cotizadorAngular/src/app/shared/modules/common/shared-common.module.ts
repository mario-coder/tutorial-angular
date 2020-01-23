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

@NgModule({
  declarations: [],
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
    DropdownModule
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
    DropdownModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "es-Es"}],
})
export class SharedCommonModule { }
