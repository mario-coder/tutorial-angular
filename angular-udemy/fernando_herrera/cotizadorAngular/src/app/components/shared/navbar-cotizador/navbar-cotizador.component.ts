import { Component, OnInit } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-navbar-cotizador',
  templateUrl: './navbar-cotizador.component.html',
  styleUrls: ['./navbar-cotizador.component.css']
})
export class NavbarCotizadorComponent implements OnInit {
  fecha:Date = new Date();

  constructor() {
    registerLocaleData(localeEs, 'es');
    this.newClock()
  }

  ngOnInit() {}

  newClock() {
    setInterval( () => {
      this.fecha = new Date()
    }, 1000)
  }
}
