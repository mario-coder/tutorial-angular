import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DragDropDirective } from './directives/drag-drop.directive';
import { NavbarCotizadorComponent } from './components/shared/navbar-cotizador/navbar-cotizador.component';
import { HomeCotizadorComponent } from './components/common/home-cotizador/home-cotizador.component';
import { ConsultaSimulacionComponent } from './components/common/consulta-simulacion/consulta-simulacion.component';
import { ResultadoConsultaSimulacionComponent } from './components/common/consulta-simulacion/resultado-consulta-simulacion/resultado-consulta-simulacion.component';
import { LoginComponent } from './components/common/login/login.component';
import { SharedCommonModule } from './components/shared/modules/shared-common.module';
import { LivianosModule } from './components/products/vehiculos/livianos/livianos.module';
import { DatePickerConfigService } from './config/date-picker-config';



@NgModule({
  declarations: [
    DragDropDirective,
    AppComponent,
    NavbarCotizadorComponent,
    HomeCotizadorComponent,
    ConsultaSimulacionComponent,
    ResultadoConsultaSimulacionComponent,
    LoginComponent
  ],
  imports: [
    SharedCommonModule,
    BrowserModule,
    AppRoutingModule,
    LivianosModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    NgxDropzoneModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "es-Es"}, DatePickerConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
