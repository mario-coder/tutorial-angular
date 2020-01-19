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
import { FileUploadModule } from 'primeng/fileupload';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

@NgModule({
  declarations: [],
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
    BsDatepickerModule,
    FileUploadModule
  ],
  exports: [
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
    BsDatepickerModule,
    FileUploadModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "es-Es"}],
})
export class SharedModule { }

