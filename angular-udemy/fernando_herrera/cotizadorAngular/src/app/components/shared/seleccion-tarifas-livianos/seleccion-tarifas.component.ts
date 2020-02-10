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
  @Input() deduciblesExistentes: Deducible[];
  @Input() planesExistentes: Plan[];

  constructor(private renderer: Renderer2, private elem: ElementRef, private cd : ChangeDetectorRef){}
  
  ngOnInit() {
    //Imagenes para seleccionado y deseleccionado
    this.backgroundOn = `url('../../../../../../../assets/img/switch_${this.producto}/${this.producto}_ON_.png')`;
    this.backgroundOff = `url('../../../../../../assets/img/switch_${this.producto}/${this.producto}_OFF_.png')`;

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
    let todasLasFilas: boolean = true;
    let todasLasColumnas: boolean = true;
    let checkboxActual = this.elem.nativeElement.querySelectorAll(`.fila-${numeroFila}.columna-${numeroColumna}`)[0];
    let estadoCheckboxActual = checkboxActual.checked;

    this.grillaChecked[numeroFila][numeroColumna] = estadoCheckboxActual;

    for(let j = 0; j < this.totalColumnas ; j++) {
      if(this.grillaChecked[numeroFila][j] != estadoCheckboxActual){
        todasLasFilas = false;
        break;
      }
    }

    for(let i = 0; i < this.totalFilas ; i++) {
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
