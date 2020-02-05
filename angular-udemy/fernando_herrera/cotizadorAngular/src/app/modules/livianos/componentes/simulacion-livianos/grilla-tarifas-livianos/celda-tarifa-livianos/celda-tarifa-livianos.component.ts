import { Component, OnInit, Input } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-celda-tarifa-livianos',
  templateUrl: './celda-tarifa-livianos.component.html',
  styleUrls: ['../../../../../../shared/styles/simulacion/grilla-tarifas/celda-tarifa/celda-tarifa.css']
})
export class TarifaLivianosComponent implements OnInit {

  @Input() simulacion: any;
  display: boolean = false;

  seleccionado = "";

  constructor() { }

  ngOnInit(): void {
    registerLocaleData(localeEs, 'es');
  }


  showDetalleTarifa() {
      this.display = true;
  }

  selecciona() {
    console.log("selecciona")
    this.seleccionado="seleccionado"
  }
}
