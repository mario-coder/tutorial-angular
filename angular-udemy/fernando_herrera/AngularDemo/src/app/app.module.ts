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
import { PanelModule } from 'primeng';
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
import {TabViewModule} from 'primeng/tabview';
import { HomeComponent } from './components/home/home.component';
import {CardModule} from 'primeng/card';
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
    HomeComponent
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
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
