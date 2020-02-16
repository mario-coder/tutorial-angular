import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { BsDatepickerConfig, DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker";
import Swal from 'sweetalert2';

import { ComboFeedService } from 'src/app/services/data/combofeed.service';
import * as moment from 'moment';
import { DatePickerConfigService } from 'src/app/config/date-picker-config';

@Component({
  selector: "app-consulta-simulacion",
  templateUrl: "./consulta-simulacion.component.html",
  styleUrls: ["../styles/consulta.css"]
})
export class ConsultaSimulacionComponent implements OnInit {
  @ViewChild('dp1', {static: true}) dp1: ElementRef;

  _isLoggedIn : number = 1;
  _sidebarHidden: boolean = false;
  _busquedaRealizada: boolean = false;
  opcionMenu: string = "Ocultar Menu";
  iconoOpcionMenu: string = "fa-window-close";

  bsConfig: Partial<BsDatepickerConfig>;
  dateCustomClasses: DatepickerDateCustomClasses[];

  tipoConsultaSelected:any;
  canalSelected:any;
  corredorSelected:any;
  companiaSelected:any;
  ramoSelected:any;
  periodoSelected:any;
  estadoSimulacionSelected:any;
  tipoVehiculoSelected:any;
  usoVehiculoSelected:any;
  subUsoVehiculoSelected:any;
  perfilAseguradoSelected:any;
  ocupacionHabitacionalSelected:any;
  tipoConstruccionSelected:any;
  zonaSelected:any;
  regionSelected:any;

  sucursalSelected:any;
  comunaSelected:any;
  marcaSelected:any;
  modeloSelected:any;
  anioSelected:any;
  tipoDocumentoSelected:any;
  tipoPersonaSelected:any;
  estadoVehiculoSelected:any;

  TIPOS_CONSULTA:any[];
  TIPOS_PERSONA:any[];
  CANALES:any[];
  CORREDORES:any[];
  COMPANIAS:any[];
  RAMOS:any[];
  PERIODOS:any[];
  ESTADOS_SIMULACION:any[];
  TIPOS_VEHICULO:any[];
  USOS_VEHICULO:any[];
  SUB_USOS_VEHICULO:any[];
  PERFILES_ASEGURADO:any[];
  OCUPACIONES_HABITACIONALES:any[];
  TIPOS_CONSTRUCCION:any[];
  ZONAS:any[];
  REGIONES:any[];
  SUCURSALES: any[];

  COMUNAS: any[];
  MARCAS: any[];
  MODELOS: any[];
  ANIOS: any[];
  TIPOS_DOCUMENTO: any[];
  
  constructor(
    private comboFeedService: ComboFeedService,
    private datePickerConfig: DatePickerConfigService) {}
  
  ngOnInit() {
    this.datePickerConfig.init();
    this.bsConfig = this.datePickerConfig.bsConfig;
    this.dateCustomClasses = this.datePickerConfig.dateCustomClasses;

    this.TIPOS_CONSULTA = this.comboFeedService.getTiposConsulta();
    this.CANALES = this.comboFeedService.getCanales();
    this.CORREDORES = this.comboFeedService.getCorredores();
    this.COMPANIAS = this.comboFeedService.getCompanias();
    this.RAMOS = this.comboFeedService.getRamos();
    this.PERIODOS = this.comboFeedService.getPeriodos();
    this.ESTADOS_SIMULACION = this.comboFeedService.getEstadosSimulacion();
    this.TIPOS_VEHICULO = this.comboFeedService.getTiposVehiculo();
    this.USOS_VEHICULO = this.comboFeedService.getUsosVehiculo();
    this.SUB_USOS_VEHICULO = this.comboFeedService.getSubUsosVehiculo();
    this.PERFILES_ASEGURADO = this.comboFeedService.getPerfilesAsegurado();
    this.OCUPACIONES_HABITACIONALES = this.comboFeedService.getOcupacionesHabitacionales();
    this.TIPOS_CONSTRUCCION = this.comboFeedService.getTiposConstruccion();
    this.ZONAS = this.comboFeedService.getZonas();
    this.REGIONES = this.comboFeedService.getRegiones();
    this.SUCURSALES = this.comboFeedService.getSucursales();

    this.COMUNAS = this.comboFeedService.getComunas();
    this.MARCAS = this.comboFeedService.getMarcas();
    this.MODELOS = this.comboFeedService.getModelos();
    this.ANIOS = this.comboFeedService.getAnios();
    this.TIPOS_DOCUMENTO = this.comboFeedService.getTiposDocumento();
    this.TIPOS_PERSONA = this.comboFeedService.getTiposPersona();
    this.SUCURSALES = this.comboFeedService.getSucursales();
  }



  toggleMenu() {
    this._sidebarHidden = !this._sidebarHidden;

    this.opcionMenu = this._sidebarHidden ? "Mostrar Menu" : "Ocultar Menu";
    this.iconoOpcionMenu = this._sidebarHidden ? "fa-list" : "fa-window-close";
  }

  buscar(){
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Buscando registros ...',
      timer: 1500
    }).then(() => {
      this._busquedaRealizada = true;
  
      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text: 'Busqueda exitosa',
        confirmButtonText: 'Aceptar'
      });
    });
    Swal.showLoading();


    console.log("Buscando registros")
  }

  today(event) {

    console.log(moment().format('DD/MM/YYYY'))
    console.log(event)
    event.value = moment().format('DD/MM/YYYY');
    //console.log(this.dp1)
    //this.dp1.nativeElement.value = moment().format('DD/MM/YYYY');
  }
}
