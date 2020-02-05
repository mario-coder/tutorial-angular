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
  deduciblesExistentes: any[] = [];
  planesExistentes: any[] = [];

  _filaTarifaSeleccionada: number;
  _columnaTarifaSeleccionada: number;

  tarifasClasificadas : any[] = [];
  arrayTarifas : any[] = [];
  

  constructor(private renderer: Renderer2, private elem: ElementRef, private cd : ChangeDetectorRef){}
  
  ngOnInit() {

//    this.mapeoTarifas(this.simulaciones);
    this.mapeoTarifas(this.simulaciones);

    // this.filaTarifaSeleccionada = this.planTarifaSeleccionada;
    // this.columnaTarifaSeleccionada = this.deducibleTarifaSeleccionada;


    this.cd.detectChanges();
  }

  ordenaPorCodigoDeducible(simA: { codigoDeducible: number; }, simB: { codigoDeducible: number; }){ return (simA.codigoDeducible - simB.codigoDeducible)}
  ordenaPorCodigoActividad(groupSimsA: { codigoActividad: number; }, groupSimsB: { codigoActividad: number; }){ return (groupSimsA.codigoActividad - groupSimsB.codigoActividad)}

  mapeoTarifas(simulaciones: any) {
    
    simulaciones.sort(this.ordenaPorCodigoActividad);

    simulaciones.map(simulacion => {
      if(this.tarifasClasificadas[simulacion.codigoActividad] === undefined) {
        this.tarifasClasificadas[simulacion.codigoActividad] = []
      }
      
      this.guardarDeducibleExistente(simulacion)
      this.guardarPlanExistente(simulacion)

      this.tarifasClasificadas[simulacion.codigoActividad].push(simulacion);
    });


    this.tarifasClasificadas.map(listaTarifas => {

      let simulacionExt = (listaTarifas && listaTarifas.length > 0)? listaTarifas[0] : undefined;

      if(simulacionExt) {
        this.tarifasClasificadas[simulacionExt.codigoActividad].sort(this.ordenaPorCodigoDeducible);
          
        let grupoTarifas = {
          codigoActividad : simulacionExt.codigoActividad,
          descripcionActividad: simulacionExt.descripcionActividad,
          listaTarifas : this.tarifasClasificadas[simulacionExt.codigoActividad]
        }
    
        this.arrayTarifas.push(grupoTarifas)
      }
    });

    this.deduciblesExistentes.sort(this.ordenaPorCodigoDeducible);
    this.planesExistentes.sort(this.ordenaPorCodigoActividad);
  }

  selecciona(fila, columna) {
    this._filaTarifaSeleccionada = fila;
    this._columnaTarifaSeleccionada = columna;
  }

  guardarPlanExistente(simulacion) {
    let plan = {
      codigoActividad: simulacion.codigoActividad,
      descripcionActividad: simulacion.descripcionActividad
    }

    if(this.planesExistentes.findIndex(pl => pl.codigoActividad === plan.codigoActividad) === -1) {
      this.planesExistentes.push(plan)
    }
  }

  guardarDeducibleExistente(simulacion) {
    let deducible = {
      codigoDeducible: simulacion.codigoDeducible,
      descripcionDeducible: simulacion.descripcionDeducible
    }

    if(this.deduciblesExistentes.findIndex(ded => ded.codigoDeducible === deducible.codigoDeducible) === -1) {
      this.deduciblesExistentes.push(deducible)
    }
  }



}
