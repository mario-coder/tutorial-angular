import { Component, OnInit, ElementRef, Renderer2, ChangeDetectorRef, Input } from '@angular/core';
import { Deducible } from 'src/app/domain/deducible';
import { Plan } from 'src/app/domain/plan';


@Component({
  selector: 'app-grilla-cotizaciones',
  templateUrl: './grilla-cotizaciones.component.html',
  styleUrls: ["./grilla-cotizaciones.component.css"]
})
export class GrillaCotizacionesComponent implements OnInit {

  headerColumnas: boolean[] = [];
  headerFilas: boolean[] = [];

  @Input() planTarifaSeleccionada: number;
  @Input() deducibleTarifaSeleccionada: number;
  @Input() simulaciones: any[];
  @Input() deduciblesExistentes: Deducible[];
  @Input() planesExistentes: Plan[];

  _filaTarifaSeleccionada: number;
  _columnaTarifaSeleccionada: number;

  tarifasClasificadas : any[] = [];
  arrayTarifas : any[] = [];
  

  constructor(private renderer: Renderer2, private elem: ElementRef, private cd : ChangeDetectorRef){}
  
  ngOnInit() {

    this.mapeoTarifas(this.simulaciones);

    // this.filaTarifaSeleccionada = this.planTarifaSeleccionada;
    // this.columnaTarifaSeleccionada = this.deducibleTarifaSeleccionada;


    this.cd.detectChanges();
  }

  //Funciones de ordenamiento
  ordenaPorCodigoDeducible(simA: { codigoDeducible: number; }, simB: { codigoDeducible: number; }){ return (simA.codigoDeducible - simB.codigoDeducible)}
  ordenaPorCodigoActividad(groupSimsA: { codigoActividad: number; }, groupSimsB: { codigoActividad: number; }){ return (groupSimsA.codigoActividad - groupSimsB.codigoActividad)}

  //Organiza las tarifas entregadas por el WS, asumiendo que no vienen ordenadas ni con todos los deducibles
  mapeoTarifas(simulaciones: any) {
    
    simulaciones.sort(this.ordenaPorCodigoActividad);

    simulaciones.map(simulacion => {
      if(this.tarifasClasificadas[simulacion.codigoActividad] === undefined) {
        this.tarifasClasificadas[simulacion.codigoActividad] = []
      }
      this.tarifasClasificadas[simulacion.codigoActividad].push(simulacion);
    });

    this.tarifasClasificadas.map(listaTarifas => {

      let simulacionExt = (listaTarifas && listaTarifas.length > 0)? listaTarifas[0] : undefined;

      if(simulacionExt) {
        this.tarifasClasificadas[simulacionExt.codigoActividad].sort(this.ordenaPorCodigoDeducible);
          
        let grupoTarifas = {
          codigoActividad : simulacionExt.codigoActividad,
          descripcionActividad: simulacionExt.descripcionActividad,
          listaTarifas : this.organizaTarifasMedianteDeduciblesExistentes(this.tarifasClasificadas[simulacionExt.codigoActividad])
        }
    
        this.arrayTarifas.push(grupoTarifas)
      }
    });
  }

  //Marca la cotizacion seleccionada
  selecciona(fila, columna) {
    this._filaTarifaSeleccionada = fila;
    this._columnaTarifaSeleccionada = columna;
  }

  //Añade tarifas vacias en los casos en que la lista de tarifas no tenga valor para cierto deducible
  organizaTarifasMedianteDeduciblesExistentes(listaTarifas:any[]) {
    let listaTarifasAux : any[] = [];
    let counter: number = 0;

    this.deduciblesExistentes.map((deducible) => {
      if(listaTarifas.findIndex(tarifa => tarifa.codigoDeducible === deducible.codigoDeducible) === -1) {
        listaTarifasAux.push(undefined)
      } else {
        listaTarifasAux.push(listaTarifas[counter++]);
      }
    })

    return listaTarifasAux;
  }
}
