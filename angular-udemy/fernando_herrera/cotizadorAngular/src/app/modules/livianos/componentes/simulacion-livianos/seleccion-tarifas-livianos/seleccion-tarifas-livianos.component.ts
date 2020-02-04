import { Component, OnInit, ElementRef, Renderer2, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-seleccion-tarifas-livianos',
  templateUrl: './seleccion-tarifas-livianos.component.html',
  styleUrls: [
'../../../../../shared/styles/simulacion/seleccion-tarifas/seleccion-tarifas.css']
})
export class SeleccionTarifasComponent implements OnInit {

  headerColumnas: boolean[] = [];
  headerFilas: boolean[] = [];

  @Input() totalFilas: number;
  @Input() totalColumnas: number;
  @Input() producto: string;

  grillaChecked: boolean[][];
  backgroundOn: string = "";
  backgroundOff: string = "";

  constructor(private renderer: Renderer2, private elem: ElementRef, private cd : ChangeDetectorRef){}
  
  ngOnInit() {
    //this.totalFilas = 4;
    //this.totalColumnas = 4;

    //this.headerColumnas = [false, false, false, false];
    //this.headerFilas = [false, false, false, false];
    this.backgroundOn = `url('../../../../../../../assets/img/switch_livianos/${this.producto}_ON_.png')`;
    this.backgroundOff = `url('../../../../../../assets/img/switch_livianos/${this.producto}_OFF_.png')`;

    for(let i = 0; i < this.totalFilas ; i++) {
      this.headerFilas[i] = false;
    }

    for(let j = 0; j < this.totalColumnas ; j++) {
      this.headerColumnas[j] = false;
    }

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

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    // this.elem.nativeElement.querySelectorAll(":checked + label .img_auto").forEach(element => {
    //   element.style.backgroundImage = this.backgroundOn;
    // });

    // this.elem.nativeElement.querySelectorAll("label .img_auto").forEach(element => {
    //   element.style.backgroundImage = this.backgroundOff;
    // });
  }
}
