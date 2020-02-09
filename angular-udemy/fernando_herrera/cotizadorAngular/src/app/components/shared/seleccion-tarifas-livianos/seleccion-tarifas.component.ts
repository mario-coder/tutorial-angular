import { Component, OnInit, ElementRef, Renderer2, ChangeDetectorRef, Input } from '@angular/core';
import { Deducible } from 'src/app/domain/deducible';
import { Plan } from 'src/app/domain/plan';

@Component({
  selector: 'app-seleccion-tarifas',
  templateUrl: './seleccion-tarifas.component.html',
  styleUrls: ['./seleccion-tarifas.component.css']
})
export class SeleccionTarifasComponent implements OnInit {

  headerColumnas: boolean[] = [];
  headerFilas: boolean[] = [];

  @Input() producto: string; //AUTO, MOTO, PESADO, HOGAR
  @Input() deducibles: Deducible[];
  @Input() productos: Plan[];

  grillaChecked: boolean[][];
  backgroundOn: string = "";
  backgroundOff: string = "";
  
  totalFilas: number;
  totalColumnas: number;
  deduciblesExistentes: Deducible[] = [];
  planesExistentes: Plan[] = [];

  constructor(private renderer: Renderer2, private elem: ElementRef, private cd : ChangeDetectorRef){}
  
  ngOnInit() {
    //Imagenes para seleccionado y deseleccionado
    this.backgroundOn = `url('../../../../../../../assets/img/switch_${this.producto}/${this.producto}_ON_.png')`;
    this.backgroundOff = `url('../../../../../../assets/img/switch_${this.producto}/${this.producto}_OFF_.png')`;

    //Inicializacion de deducibles y planes
    this.deduciblesExistentes = [
      {codigoDeducible: "1", descripcionDeducible: "0 UF"},
      {codigoDeducible: "2", descripcionDeducible: "3 UF"},
      {codigoDeducible: "3", descripcionDeducible: "5 UF"},
      {codigoDeducible: "4", descripcionDeducible: "10 UF"}]
    this.planesExistentes = [
      {codigoActividad: "1", descripcionActividad: "XL Liviano Particular"},
      {codigoActividad: "2", descripcionActividad: "L Liviano Particular"},
      {codigoActividad: "3", descripcionActividad: "M Liviano Particular"},
      {codigoActividad: "4", descripcionActividad: "S Liviano Particular"}]

    //CALCULOS
    this.totalFilas = this.planesExistentes.length;
    this.totalColumnas = this.deduciblesExistentes.length;

    for(let i = 0; i < this.totalFilas ; i++) {
      this.headerFilas[i] = false;
    }

    for(let j = 0; j < this.totalColumnas ; j++) {
      this.headerColumnas[j] = false;
    }

    //Arreglo bidimensional que representa la grilla en pantalla
    this.grillaChecked = [];
    for(let i = 0; i < this.totalFilas ; i++) {
      this.grillaChecked[i] = [];
      for (let j = 0; j < this.totalColumnas; j++) {
          this.grillaChecked[i][j] = false;
       }
    }
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
    console.log(numeroFila, numeroColumna)
    let todasLasFilas: boolean = true;
    let todasLasColumnas: boolean = true;
    let checkboxActual = this.elem.nativeElement.querySelectorAll(`.fila-${numeroFila}.columna-${numeroColumna}`)[0];
    let estadoCheckboxActual = checkboxActual.checked;

    this.grillaChecked[numeroFila][numeroColumna] = estadoCheckboxActual;

    for(let j = 0; j < this.totalFilas ; j++) {
      if(this.grillaChecked[numeroFila][j] != estadoCheckboxActual){
        todasLasFilas = false;
        break;
      }
    }

    for(let i = 0; i < this.totalColumnas ; i++) {
      if(this.grillaChecked[i][numeroColumna] != estadoCheckboxActual){
        todasLasColumnas = false;
        break;
      }
    }
    
    this.headerFilas[numeroFila] = (todasLasFilas)? estadoCheckboxActual: false;
    this.headerColumnas[numeroColumna] = (todasLasColumnas)? estadoCheckboxActual: false;

    this.cd.detectChanges();
  }
}
