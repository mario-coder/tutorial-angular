import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarCotizadorComponent } from './shared/navbar-cotizador/navbar-cotizador.component';
import { LivianosModule } from './modulos/livianos/livianos.module';
import { HomeCotizadorComponent } from './components/home-cotizador/home-cotizador.component';
import { ConsultaSimulacionComponent } from './components/consulta-simulacion/consulta-simulacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarCotizadorComponent,
    HomeCotizadorComponent,
    ConsultaSimulacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LivianosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
