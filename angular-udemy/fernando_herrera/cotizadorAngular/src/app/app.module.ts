import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { NavbarCotizadorComponent } from './shared/navbar-cotizador/navbar-cotizador.component';
import { LivianosModule } from './modules/livianos/livianos.module';
import { HomeCotizadorComponent } from './components/home-cotizador/home-cotizador.component';
import { ConsultaSimulacionComponent } from './components/consulta-simulacion/consulta-simulacion.component';
import { ResultadoConsultaSimulacionComponent } from './components/consulta-simulacion/resultado-consulta-simulacion/resultado-consulta-simulacion.component';
import { LoginComponent } from './components/login/login.component';
import { DatePickerConfigService } from './shared/config/date-picker-config';
import { DragDropDirective } from './shared/directives/drag-drop.directive';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedCommonModule } from './shared/modules/common/shared-common.module';

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
