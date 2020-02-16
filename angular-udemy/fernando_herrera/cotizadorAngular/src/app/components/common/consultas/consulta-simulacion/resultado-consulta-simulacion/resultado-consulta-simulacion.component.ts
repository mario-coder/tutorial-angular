import { Component, OnInit } from '@angular/core';

import { ComboFeedService } from 'src/app/services/data/combofeed.service';
import { Simulacion } from 'src/app/domain/simulacion';
import { BuscadorSimulacionesService } from 'src/app/services/buscador-simulaciones.service';

@Component({
  selector: 'app-resultado-consulta-simulacion',
  templateUrl: './resultado-consulta-simulacion.component.html',
  styleUrls: ["../../styles/resultado-consulta.css"]
})
export class ResultadoConsultaSimulacionComponent implements OnInit {

  displayDialog: boolean;

  _displayOpcionesSimulacion: boolean = false;
  _opcionEscogidaDialogSimulacion: number = 0;
  _OPCION_DETALLE = 1;
  _OPCION_REIMPRIMIR = 2;
  _OPCION_CAMBIAR_ESTADO = 3;
  
  nuevoEstadoSimulacionSelected: any;
  motivoCambioEstado: string;

  ESTADOS_SIMULACION:any[];

  selectedSimulaciones:any[];

  newCar: boolean;

  simulaciones: Simulacion[];

  cols: any[];

  exportColumns: any[];

  constructor(
    private comboFeedService: ComboFeedService,
    private buscadorSimulacionesService: BuscadorSimulacionesService) { }

  ngOnInit() {
      this.simulaciones = this.buscadorSimulacionesService.getSimulacionesLarge();
      this.ESTADOS_SIMULACION = this.comboFeedService.getEstadosSimulacion();

      this.cols = [
        {field: "numSimulacion", header: "Nro. Simulacion"},
        {field: "fechaSimulacion", header: "Fecha Simulacion"},
        {field: "horaSimulacion", header: "Hora Simulacion"},
        {field: "ramo", header: "Ramo"},
        {field: "producto", header: "Producto"},
        {field: "uso", header: "Uso"},
        {field: "rcExceso", header: "Rc Exceso"},
        {field: "clausulasAdicionales", header: "Clausulas Adicionales"},
        {field: "tipoVigencia", header: "Tipo Vigencia"},
        {field: "canal", header: "Canal"},
        {field: "corredor", header: "Corredor"},
        {field: "sucursal", header: "Sucursal"},
        {field: "estado", header: "Estado"},
        {field: "tipoDePersonaAsegurado", header: "Tipo de Persona Asegurado"},
        {field: "rutAsegurado", header: "Rut Asegurado"},
        {field: "nombreAsegurado", header: "Nombre Asegurado"},
        {field: "apellidoAsegurado", header: "Apellido Asegurado"},
        {field: "comuna", header: "Comuna"},
        {field: "fechaNacimientoAsegurado", header: "Fecha de Nacimiento Asegurado"},
        {field: "generoAsegurado", header: "Genero Asegurado"},
        {field: "fechaAprobacionRechazo", header: "Fecha Aprobacion/Rechazo"},
        {field: "fechaPropuesta", header: "Fecha Propuesta"},
        // {field: "numDocumentoCliente", header: "Nro. Documento Cliente"},
        {field: "aplicaDescuentoRecargo", header: "Aplica Descuento/Recargo"},
        {field: "porcentaje", header: "Porcentaje"}
      ];
  
  
      this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
    }

  showDialogSimulacion(_OPCION_ESCOGIDA) {
      this._displayOpcionesSimulacion = true;
      this._opcionEscogidaDialogSimulacion = _OPCION_ESCOGIDA;
  }

  // showDialogToAdd() {
  //     this.newCar = true;
  //     this.car = {};
  //     this.displayDialog = true;
  // }

//   save() {
//       let cars = [...this.cars];
//       if (this.newCar)
//           cars.push(this.car);
//       else
//           cars[this.cars.indexOf(this.selectedCar)] = this.car;

//       this.cars = cars;
//       this.car = null;
//       this.displayDialog = false;
//   }

//   delete() {
//       let index = this.cars.indexOf(this.selectedCar);
//       this.cars = this.cars.filter((val, i) => i != index);
//       this.car = null;
//       this.displayDialog = false;
//   }

//   onRowSelect(event) {
//       this.newCar = false;
//       this.car = this.cloneCar(event.data);
//       this.displayDialog = true;
//   }

//   cloneCar(c: Car): Car {
//       let car:any = {};
//       for (let prop in c) {
//           car[prop] = c[prop];
//       }
//       return car;
//   }

  exportPdf() {
    import("jspdf").then(jsPDF => {
        import("jspdf-autotable").then(x => {
            const doc = new jsPDF.default(0,0);
            //console.log('cars pdf '+ this);
            doc.autoTable(this.exportColumns, this.simulaciones);
            doc.save('consulta_simulacion.pdf');
        })
    })
  }

  exportExcel() {
      import("xlsx").then(xlsx => {
          const worksheet = xlsx.utils.json_to_sheet(this.simulaciones);
          const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
          const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
          this.saveAsExcelFile(excelBuffer, "consulta_simulacion");
      });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
      import("file-saver").then(FileSaver => {
          let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
          let EXCEL_EXTENSION = '.xlsx';
          const data: Blob = new Blob([buffer], {
              type: EXCEL_TYPE
          });
          FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
      });
  }
}

