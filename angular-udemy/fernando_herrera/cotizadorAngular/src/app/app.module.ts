import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
// import { ChartModule } from "primeng/chart";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PanelModule, InputTextModule } from "primeng";
import { CommonModule } from "@angular/common";
import { FieldsetModule } from "primeng/fieldset";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { CardModule } from "primeng/card";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { HttpClientModule } from "@angular/common/http";
// import { TarifaComponent } from "./components/tarifa/tarifa.component";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { AccordionModule } from "primeng/accordion";
import { TooltipModule } from 'primeng/tooltip';
import { NavbarCotizadorComponent } from './shared/navbar-cotizador/navbar-cotizador.component';
import { LivianosModule } from './modulos/livianos/livianos.module';
import { HomeCotizadorComponent } from './components/home-cotizador/home-cotizador.component';
import { ConsultaSimulacionComponent } from './components/consulta-simulacion/consulta-simulacion.component';
import { ResultadoConsultaSimulacionComponent } from './components/resultado-consulta-simulacion/resultado-consulta-simulacion.component';
import { LoginComponent } from './components/login/login.component';
import { DatePickerConfigService } from './shared/config/date-picker-config';

@NgModule({
  declarations: [
    AppComponent,
    NavbarCotizadorComponent,
    HomeCotizadorComponent,
    ConsultaSimulacionComponent,
    ResultadoConsultaSimulacionComponent,
    LoginComponent
    //TarifaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LivianosModule,
    // ChartModule,
    BrowserAnimationsModule,
    PanelModule, 
    InputTextModule, 
    // CalendarModule,
    CommonModule,
    FieldsetModule,
    DropdownModule,
    FormsModule, 
    ReactiveFormsModule,
    TableModule,
    TabViewModule,
    CardModule,
    DialogModule,
    ButtonModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    AccordionModule,
    TooltipModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "es-Es"}, DatePickerConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
