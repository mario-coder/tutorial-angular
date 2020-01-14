import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PanelModule, InputTextModule } from "primeng";
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    PanelModule,
    CardModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ],
  exports: [BrowserModule,PanelModule, CardModule, DialogModule, ButtonModule, InputTextModule, TableModule, TabViewModule, FormsModule, ReactiveFormsModule, BsDatepickerModule]
})
export class CommonModule { }

