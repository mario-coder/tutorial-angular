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

  _filaTarifaSeleccionada: number;
  _columnaTarifaSeleccionada: number;

  tarifasClasificadas : any = {};
  arrayTarifas : any[] = [];
  
  deduciblesExistentes: any[] = [];
  planesExistentes: any[] = [];

  constructor(private renderer: Renderer2, private elem: ElementRef, private cd : ChangeDetectorRef){}
  
  ngOnInit() {

//    this.mapeoTarifas(this.simulaciones);
    this.mapeoTarifas(this.simulaciones);

    // this.filaTarifaSeleccionada = this.planTarifaSeleccionada;
    // this.columnaTarifaSeleccionada = this.deducibleTarifaSeleccionada;


    this.cd.detectChanges();
  }

  ordenaPorDeducible(simA: { codigoDeducible: number; }, simB: { codigoDeducible: number; }){ return (simA.codigoDeducible - simB.codigoDeducible)}
  ordenaPorCodigoActividad(groupSimsA: { codigoActividad: number; }, groupSimsB: { codigoActividad: number; }){ return (groupSimsA.codigoActividad - groupSimsB.codigoActividad)}

  mapeoTarifas(simulaciones: any) {
    
    simulaciones.sort(this.ordenaPorCodigoActividad);

    simulaciones.map(simulacion => {
      if(this.tarifasClasificadas[simulacion.codigoActividad] == undefined) {
        this.tarifasClasificadas[simulacion.codigoActividad] = []
      }
      
      this.tarifasClasificadas[simulacion.codigoActividad].push(simulacion);
    });

    let actividadActual = ""
    simulaciones.map(simulacion => {

      if(!this.planesExistentes.includes(simulacion.codigoActividad)){
        this.tarifasClasificadas[simulacion.codigoActividad].sort(this.ordenaPorDeducible);
        
        this.planesExistentes.push(simulacion.codigoActividad);
  
        let grupoTarifas = {
          codigoActividad : simulacion.codigoActividad,
          descripcionActividad: simulacion.descripcionActividad,
          listaTarifas : this.tarifasClasificadas[simulacion.codigoActividad]
        }
  
        this.arrayTarifas.push(grupoTarifas)
      }
    });

    console.log("m2")
    console.log(this.arrayTarifas)
  }

  selecciona(fila, columna) {
    console.log(fila, columna)

    this._filaTarifaSeleccionada = fila;
    this._columnaTarifaSeleccionada = columna;
  }
}
