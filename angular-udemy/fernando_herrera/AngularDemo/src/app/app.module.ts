import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'primeng/chart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BarrasComponent } from './components/barras/barras.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule, InputTextModule, CalendarModule } from 'primeng';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { DatatableComponent } from './components/datatable/datatable.component';
import { TableModule } from 'primeng/table';
import { EjemplosComponent } from './components/ejemplos/ejemplos.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { CssComponent } from './components/css/css.component';
import { ClasesComponent } from './components/clases/clases.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { TabViewModule } from 'primeng/tabview';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { CrudComponent } from './components/crud/crud.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from "@angular/common/http";
import { TextoComponent } from './components/texto/texto.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { LoginComponent } from './components/login/login.component';
import { TarifaComponent } from './components/tarifa/tarifa.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ComponentesComponent } from './components/componentes/componentes.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { Componentes2Component } from './components/componentes2/componentes2.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NavbarCotizadorComponent } from './components/shared/navbar-cotizador/navbar-cotizador.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    NavbarComponent,
    BarrasComponent,
    FormularioComponent,
    DatatableComponent,
    EjemplosComponent,
    ResaltadoDirective,
    CssComponent,
    ClasesComponent,
    NgStyleComponent,
    NgSwitchComponent,
    HomeComponent,
    CrudComponent,
    TextoComponent,
    CapitalizadoPipe,
    ContrasenaPipe,
    DomseguroPipe,
    LoginComponent,
    TarifaComponent,
    DialogComponent,
    ComponentesComponent,
    TecnologiasComponent,
    Componentes2Component,
    DatepickerComponent,
    NavbarCotizadorComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    PanelModule,
    ChartModule,
    FieldsetModule,
    DropdownModule,
    FormsModule,
    TableModule,
    TabViewModule,
    CardModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
