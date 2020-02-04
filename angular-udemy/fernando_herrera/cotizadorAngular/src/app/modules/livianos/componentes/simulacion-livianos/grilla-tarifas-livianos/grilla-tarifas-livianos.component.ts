import { Component, OnInit, ElementRef, Renderer2, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-grilla-tarifas-livianos',
  templateUrl: './grilla-tarifas-livianos.component.html',
  styleUrls: [
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
  _tarificado: boolean = false;

  constructor(private renderer: Renderer2, private elem: ElementRef, private cd : ChangeDetectorRef){}
  
  ngOnInit() {

    console.log("grilla tarifas")
    console.log(this.simulaciones)

    this.tarifasClasificadas = this.mapeoTarifas(this.simulaciones);

    console.log("tarifas clasificadas")
    console.log(this.tarifasClasificadas)


    this.cd.detectChanges();
  }

  ordena(simA: { codigoDeducible: number; }, simB: { codigoDeducible: number; }){ return (simA.codigoDeducible - simB.codigoDeducible)}

  mapeoTarifas(simulaciones: any) {
    let tarifasClasificadas: any = {};
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
    
    tarifasClasificadas = {
      tarifasXL,
      tarifasL,
      tarifasM,
      tarifasS
    }

    this._tarificado = true;
    return tarifasClasificadas
  }

  selecciona(fila, columna) {
    console.log(fila, columna)
  }
}
