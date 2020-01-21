import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/domain/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-resultado-consulta-simulacion',
  templateUrl: './resultado-consulta-simulacion.component.html',
  styleUrls: ['./resultado-consulta-simulacion.component.css']
})
export class ResultadoConsultaSimulacionComponent implements OnInit {

  displayDialog: boolean;

  _displayOpcionesSimulacion: boolean = false;
  _opcionEscogidaDialogSimulacion: number = 0;
  _OPCION_DETALLE = 1;
  _OPCION_REIMPRIMIR = 2;
  _OPCION_CAMBIAR_ESTADO = 3;

  car: any = {};

  selectedCar: Car;

  newCar: boolean;

  cars: Car[];

  cols: any[];

  exportColumns: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.cars = this.carService.getCarsLarge()

      this.cols = [
          { field: 'vin', header: 'Vin' },
          { field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];
  
  
      this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
    }

  showDialogSimulacion(_OPCION_ESCOGIDA) {
      this._displayOpcionesSimulacion = true;
      this._opcionEscogidaDialogSimulacion = _OPCION_ESCOGIDA;
  }

  showDialogToAdd() {
      this.newCar = true;
      this.car = {};
      this.displayDialog = true;
  }

  save() {
      let cars = [...this.cars];
      if (this.newCar)
          cars.push(this.car);
      else
          cars[this.cars.indexOf(this.selectedCar)] = this.car;

      this.cars = cars;
      this.car = null;
      this.displayDialog = false;
  }

  delete() {
      let index = this.cars.indexOf(this.selectedCar);
      this.cars = this.cars.filter((val, i) => i != index);
      this.car = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newCar = false;
      this.car = this.cloneCar(event.data);
      this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
      let car:any = {};
      for (let prop in c) {
          car[prop] = c[prop];
      }
      return car;
  }

  exportPdf() {
    import("jspdf").then(jsPDF => {
        import("jspdf-autotable").then(x => {
            const doc = new jsPDF.default(0,0);
            //console.log('cars pdf '+ this);
            doc.autoTable(this.exportColumns, this.cars);
            doc.save('primengTable.pdf');
        })
    })
  }

  exportExcel() {
      import("xlsx").then(xlsx => {
          const worksheet = xlsx.utils.json_to_sheet(this.cars);
          const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
          const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
          this.saveAsExcelFile(excelBuffer, "primengTable");
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

