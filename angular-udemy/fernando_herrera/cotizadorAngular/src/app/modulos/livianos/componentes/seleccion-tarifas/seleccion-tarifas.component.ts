import { Component, OnInit, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-seleccion-tarifas',
  templateUrl: './seleccion-tarifas.component.html',
  styleUrls: ['./seleccion-tarifas.component.css']
})
export class SeleccionTarifasComponent implements OnInit {

  headerColumnas: boolean[];
  headerFilas: boolean[];

  totalFilas: number;
  totalColumnas: number;

  grillaChecked: boolean[][];

  constructor(private renderer: Renderer2, private elem: ElementRef, private cd : ChangeDetectorRef){}

  ngOnInit() {
    this.totalFilas = 4;
    this.totalColumnas = 4;

    this.headerColumnas = [false, false, false, false];
    this.headerFilas = [false, false, false, false];

    this.grillaChecked = [];
    for(let i = 0; i < this.totalFilas ; i++) {
      this.grillaChecked[i] = [];
      for (let j = 0; j < this.totalColumnas; j++) {
          this.grillaChecked[i][j] = false;
       }
    }

    console.log(this.grillaChecked)

  }

  chequearTodaLaFila(numeroFila, event) {
    this.elem.nativeElement.querySelectorAll(".fila-"+ numeroFila).
    forEach((item, index) => {
      item.checked = event;
      this.chequearHeadersFilaColumna(numeroFila, index);
      this.cd.detectChanges();
    })

  }

  chequearTodaLaColumna(numeroColumna, event) {
    this.elem.nativeElement.querySelectorAll(".columna-"+ numeroColumna).
    forEach((item, index) => {
      item.checked = event;
      this.chequearHeadersFilaColumna(index, numeroColumna);
      this.cd.detectChanges();
    })

  }

  chequearHeadersFilaColumna(numeroFila, numeroColumna) {
    let todasLasFilas: boolean = true;
    let todasLasColumnas: boolean = true;
    let estadoCheckboxActual = this.elem.nativeElement.querySelectorAll(`.fila-${numeroFila}.columna-${numeroColumna}`)[0].checked;

    this.grillaChecked[numeroFila][numeroColumna] = estadoCheckboxActual;

    for(let j = 0; j < this.totalFilas ; j++) {
      if(this.grillaChecked[numeroFila][j] != estadoCheckboxActual){
        todasLasFilas = false;
      }
    }

    for(let i = 0; i < this.totalColumnas ; i++) {
      if(this.grillaChecked[i][numeroColumna] != estadoCheckboxActual){
        todasLasColumnas = false;
      }
    }

    
    this.headerFilas[numeroFila] = (todasLasFilas)? estadoCheckboxActual: false;
    this.headerColumnas[numeroColumna] = (todasLasColumnas)? estadoCheckboxActual: false;

    console.log(this.grillaChecked);
    console.log("======================================")
    
    this.cd.detectChanges();
  }
}
