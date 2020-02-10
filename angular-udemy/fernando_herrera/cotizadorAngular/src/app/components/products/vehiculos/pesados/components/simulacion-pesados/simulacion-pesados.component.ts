import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { TarificadorService } from "src/app/services/tarificador.service";
import { BsDatepickerConfig, DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker";

import { ComboFeedService } from 'src/app/services/data/combofeed.service';
import { DatePickerConfigService } from 'src/app/config/date-picker-config';
import { Deducible } from 'src/app/domain/deducible';
import { Plan } from 'src/app/domain/plan';

@Component({
  selector: "app-simulacion-pesados",
  templateUrl: "./simulacion-pesados.component.html",
  styleUrls: ["./simulacion-pesados.component.css",
  "../../../../styles/simulacion/simulacion.css"]
})

export class SimulacionPesadosComponent implements OnInit {
  PRODUCTO = "pesados";
  _displayBuscarDocumento: boolean = false;
  _isLoggedIn : number = 1;
  
  SIMULACION:number = 1;
  PROPUESTA:number = 2;
  EMISION:number = 3;
  CURRENT_STAGE = this.SIMULACION;

  _propuestaActiva: boolean = false;


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
  subUsoVehiculoSelected: any;
  tallerSelected: any;
  asistenciaSelected: any;
  rcsEnExcesoSelected: any;
  tipoOperacionSelected: any;

  tipoVehiculoSelected: any;
  clausulasAdicionalesSelected: any[];

  ESTADOS_VEHICULO: any[];
  ANIOS: any[];
  MARCAS: any[];
  MODELOS: any[];
  TIPOS_DOCUMENTO: any[];
  COMUNAS: any[];
  DESCUENTO_RECARGO: any[];
  COMPANIAS_ANTERIORES: any[];
  USOS_VEHICULOS_PESADOS: any[];
  TALLERES: any[];
  ASISTENCIAS: any[];
  RCS_EN_EXCESO: any[];
  TIPOS_VEHICULOS_PESADOS: any[];
  SUB_USOS_VEHICULOS_PESADOS: any[];
  CLAUSULAS_ADICIONALES_PESADOS: any[];
    
  _tarificado: boolean = false;
  simulaciones: any[];
  deduciblesExistentes: Deducible[];
  planesExistentes: Plan[];
 
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
    this.USOS_VEHICULOS_PESADOS = this.comboFeedService.getUsosVehiculosPesados();
    this.SUB_USOS_VEHICULOS_PESADOS = this.comboFeedService.getSubUsosCamion();
    this.COMUNAS = this.comboFeedService.getComunas();
    this.TALLERES = this.comboFeedService.getTalleres();;
    this.ASISTENCIAS = this.comboFeedService.getAsistencias();
    this.RCS_EN_EXCESO = this.comboFeedService.getRcsEnExceso();
    this.ESTADOS_VEHICULO = this.comboFeedService.getEstadosVehiculo();
    this.TIPOS_DOCUMENTO = this.comboFeedService.getTiposDocumento();
    this.DESCUENTO_RECARGO = this.comboFeedService.getOpcionesDescuentoRecargo();

    this.TIPOS_VEHICULOS_PESADOS = this.comboFeedService.getTiposVehiculosPesados();
    this.CLAUSULAS_ADICIONALES_PESADOS = this.comboFeedService.getClausulasAdicionalesPesados();

    //Inicializacion de deducibles y planes para tarificacion
    this.deduciblesExistentes = [
      {codigoDeducible: "1", descripcionDeducible: "0 UF"},
      {codigoDeducible: "2", descripcionDeducible: "5 UF"},
      {codigoDeducible: "3", descripcionDeducible: "10 UF"},
      {codigoDeducible: "4", descripcionDeducible: "20 UF"},
      {codigoDeducible: "5", descripcionDeducible: "30 UF"},
      {codigoDeducible: "6", descripcionDeducible: "40 UF"},
      {codigoDeducible: "7", descripcionDeducible: "50 UF"},
      {codigoDeducible: "8", descripcionDeducible: "100 UF"}]
    this.planesExistentes = [
      {codigoActividad: "1", descripcionActividad: "L Liviano Particular"},
      {codigoActividad: "2", descripcionActividad: "M Liviano Particular"},
      {codigoActividad: "3", descripcionActividad: "S Liviano Particular"}]
  }

  async tarificar() {

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Tarificando, espere por favor ..."
    });
    Swal.showLoading();

    setTimeout(async () => {
      this.simulaciones = await this.tarificadorService.tarificarPesados();

      this._tarificado = true;

      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text: 'Proceso de tarificacion exitoso',
        showConfirmButton: true
      });

      // Swal.close();
    }, 2000);
  }

  saludo() {
    console.log("hola mundirijillo");
  }

  comenzarPropuesta(){
    this._propuestaActiva = true;
  }
}
