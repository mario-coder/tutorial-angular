import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { TarificadorService } from "src/app/services/tarificador.service";
import { BsDatepickerConfig, DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker";
import { DatePickerConfigService } from 'src/app/shared/config/date-picker-config';
import { ComboFeedService } from 'src/app/services/data/combofeed.service';

@Component({
  selector: "app-simulacion-livianos",
  templateUrl: "./simulacion-livianos.component.html",
  styleUrls: ["./simulacion-livianos.component.css"]
})
export class SimulacionLivianosComponent implements OnInit {
  _displayBuscarDocumento: boolean = false;
  _isLoggedIn : number = 1;
  
  SIMULACION:number = 1;
  PROPUESTA:number = 2;
  EMISION:number = 3;

  CURRENT_STAGE = this.SIMULACION;

  bsConfig: Partial<BsDatepickerConfig>;
  dateCustomClasses: DatepickerDateCustomClasses[];
  
  estadoVehiculoSelected: any;
  anioSelected: any;
  marcaSelected: any;
  modeloSelected: any;
  tipoDocumentoSelected: any;
  comunaSelected: any;
  descuentoRecargoSelected: any;
  rcEnExcesoSelected: any;
  companiaAnteriorSelected: any;
  usoVehiculoSelected: any;
  tallerSelected: any;
  asistenciaSelected: any;
  rcsEnExcesoSelected: any;

  ESTADOS_VEHICULO: any[];
  ANIOS: any[];
  MARCAS: any[];
  MODELOS: any[];
  TIPOS_DOCUMENTO: any[];
  COMUNAS: any[];
  DESCUENTO_RECARGO: any[];
  COMPANIAS_ANTERIORES: any[];
  USOS_VEHICULO: any[];
  TALLERES: any[];
  ASISTENCIAS: any[];
  RCS_EN_EXCESO: any[];
    
  _tarificado: boolean = false;
  simulaciones: any[];
  tarifasClasificadas: any = {};

  constructor(
      private comboFeedService: ComboFeedService,
      private tarificadorService: TarificadorService,
      private datePickerConfig: DatePickerConfigService
    ) {
  }
    
  ngOnInit(): void {
      
    /*Configuracion por defecto DatePicker*/
    this.datePickerConfig.init();
    this.bsConfig = this.datePickerConfig.bsConfig;
    this.dateCustomClasses = this.datePickerConfig.dateCustomClasses;

    this.ANIOS = this.comboFeedService.getAnios();
    this.MARCAS = this.comboFeedService.getMarcas();
    this.MODELOS = this.comboFeedService.getModelos();
    this.COMPANIAS_ANTERIORES = this.comboFeedService.getCompaniasAnteriores();
    this.USOS_VEHICULO = this.comboFeedService.getUsosVehiculo();
    this.COMUNAS = this.comboFeedService.getComunas();
    this.TALLERES = this.comboFeedService.getTalleres();;
    this.ASISTENCIAS = this.comboFeedService.getAsistencias();
    this.RCS_EN_EXCESO = this.comboFeedService.getRcsEnExceso();
    this.ESTADOS_VEHICULO = this.comboFeedService.getEstadosVehiculo();
    this.TIPOS_DOCUMENTO = this.comboFeedService.getTiposDocumento();
    this.DESCUENTO_RECARGO = this.comboFeedService.getOpcionesDescuentoRecargo();
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

      this._tarificado = true;

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

    this._tarificado = true;
    return tarifasClasificadas
  }

  saludo() {
    console.log("hola mundirijillo");
  }

  comenzarPropuesta(){
    this.CURRENT_STAGE = this.PROPUESTA;
  }
}
