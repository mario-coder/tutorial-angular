import { Component, OnInit, Input } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent implements OnInit {

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
