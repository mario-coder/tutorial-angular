import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { TarificadorService } from "src/app/services/tarificador.service";
import { BsDatepickerConfig, DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker";
import { DatePickerConfigService } from 'src/app/shared/config/date-picker-config';

@Component({
  selector: "app-simulacion-livianos",
  templateUrl: "./simulacion-livianos.component.html",
  styleUrls: ["./simulacion-livianos.component.css"]
})
export class SimulacionLivianosComponent implements OnInit {
  _displayBuscarDocumento: boolean = false;
  isLoggedIn : number = 1;
  SIMULACION:number = 1;
  PROPUESTA:number = 2;
  EMISION:number = 3;

  CURRENT_STAGE = this.SIMULACION;

  bsConfig: Partial<BsDatepickerConfig>;
  dateCustomClasses: DatepickerDateCustomClasses[];

  estadosVehiculo: any[];
  anios: any[];
  marcas: any[];
  modelos: any[];
  tiposDocumento: any[];
  comunas: any[];
  talleres: any[];
  selectedEstadoVehiculo: any;
  tarificado: boolean = false;
  simulaciones: any[];
  tarifasClasificadas: any = {};
  asistencias: any[];
  descuentoRecargo: any[];

  constructor(
      private tarificadorService: TarificadorService,
      private datePickerConfig: DatePickerConfigService
    ) {
  }
    
  ngOnInit(): void {
      
    /*Configuracion por defecto DatePicker*/
    this.datePickerConfig.init();
    this.bsConfig = this.datePickerConfig.bsConfig;
    this.dateCustomClasses = this.datePickerConfig.dateCustomClasses;

    this.estadosVehiculo = [
      { label: "Nuevo", code: "1" },
      { label: "Usado", code: "2" }
    ];
    this.anios = [
      { label: "2020", code: "1" },
      { label: "2019", code: "2" }
    ];
    this.marcas = [
      { label: "Chevrolet", code: "1" },
      { label: "Ford", code: "2" }
    ];
    this.modelos = [
      { label: "Aveo", code: "1" },
      { label: "Focus", code: "2" }
    ];
    this.tiposDocumento = [
      { label: "PERSONA NATURAL", code: "1" },
      { label: "PERSONA JURIDICA", code: "2" }
    ];
    this.comunas = [
      { label: "LAS CONDES", code: "1" },
      { label: "PROVIDENCIA", code: "2" }
    ];
    this.talleres = [
      { label: "TALLER REALE", code: "1" },
      { label: "TALLER MARCA", code: "2" }
    ];
    this.descuentoRecargo = [
      { label: "DESCUENTO", code: "1" },
      { label: "RECARGO", code: "2" }
    ];
    this.asistencias = [
      { label: "A", code: "1" },
      { label: "B", code: "2" },
      { label: "PLUS", code: "2" }
    ];
  }

  async tarificar() {
    let simulaciones: any[];

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Tarificando, espere por favor ..."
    });
    Swal.showLoading();

    setTimeout(async () => {
      simulaciones = await this.tarificadorService.tarificar();

      //this.tarifasClasificadas = this.clasificacionTarifas(simulaciones);
      this.tarifasClasificadas = this.mapeoTarifas(simulaciones);

      console.log("this.tarifasclasificadas");
      console.log(this.tarifasClasificadas);

      // Swal.fire({
      //   allowOutsideClick: false,
      //   icon: 'success',
      //   text: 'Proceso exitoso',
      //   showConfirmButton: true
      // });

      Swal.close();
    }, 2000);
  }

  clasificacionTarifas(simulaciones: any) {
    let tarifasClasificadas: any = {};

    simulaciones.map(simulacion => {
      console.log(simulacion.descripcionActividad);
      let codigoTarifaGrilla =
        simulacion.codigoActividad + "-" + simulacion.codigoDeducible;
      if (tarifasClasificadas[codigoTarifaGrilla] === undefined) {
        tarifasClasificadas[codigoTarifaGrilla] = [];
      }
      tarifasClasificadas[codigoTarifaGrilla].push(simulacion);
    });

    //console.log("Tarifas Clasificadas")
    //console.log(tarifasClasificadas)
    
    return tarifasClasificadas;
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

    this.tarificado = true;
    return tarifasClasificadas
  }

  saludo() {
    console.log("hola mundirijillo");
  }

  comenzarPropuesta(){
    this.CURRENT_STAGE = this.PROPUESTA;
  }
}
