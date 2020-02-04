import { Component, OnInit, ElementRef, Renderer2, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-grilla-tarifas-livianos',
  templateUrl: './grilla-tarifas-livianos.component.html',
  styleUrls: ["./grilla-tarifas-livianos.component.css",
'../../../../../shared/styles/simulacion/seleccion-tarifas/seleccion-tarifas.css']
})
export class GrillaTarifasLivianosComponent implements OnInit {

  headerColumnas: boolean[] = [];
  headerFilas: boolean[] = [];

  @Input() planTarifaSeleccionada: number;
  @Input() deducibleTarifaSeleccionada: number;
  @Input() simulaciones: any[];
  @Input() deducibles: any[];
  @Input() productos: any[];

  filaTarifaSeleccionadaOld: number;
  columnaTarifaSeleccionadaOld: number;

  filaTarifaSeleccionadaNew: number;
  columnaTarifaSeleccionadaNew: number;

  tarifasClasificadas : any = {};
  

  constructor(private renderer: Renderer2, private elem: ElementRef, private cd : ChangeDetectorRef){}
  
  ngOnInit() {

    this.mapeoTarifas(this.simulaciones);


    this.cd.detectChanges();
  }

  ordena(simA: { codigoDeducible: number; }, simB: { codigoDeducible: number; }){ return (simA.codigoDeducible - simB.codigoDeducible)}

  mapeoTarifas(simulaciones: any) {
    let tarifasXL: any[] = [];
    let tarifasL: any[] = [];
    let tarifasM: any[] = [];
    let tarifasS: any[] = [];

    let tarifaXL_Part = "1";
    let tarifaL_Part = "2";
    let tarifaM_Part = "3";
    let tarifaS_Part = "4";

    simulaciones.map(simulacion => {
      switch(simulacion.codigoActividad){
        case tarifaXL_Part:
          tarifasXL.push(simulacion)
        break;
        case tarifaL_Part:
          tarifasL.push(simulacion)
        break;
        case tarifaM_Part:
          tarifasM.push(simulacion)
        break;
        case tarifaS_Part:
          tarifasS.push(simulacion)
        break;
      }
    });

    tarifasXL.sort(this.ordena)
    tarifasL.sort(this.ordena)
    tarifasM.sort(this.ordena)
    tarifasS.sort(this.ordena)
    
    this.tarifasClasificadas = {
      tarifasXL,
      tarifasL,
      tarifasM,
      tarifasS
    }
  }

  selecciona(fila, columna) {
    console.log(fila, columna)

    this.filaTarifaSeleccionadaNew = fila;
    this.columnaTarifaSeleccionadaNew = columna;

    this.filaTarifaSeleccionadaOld = null;
    this.columnaTarifaSeleccionadaOld = null;
  }
}
