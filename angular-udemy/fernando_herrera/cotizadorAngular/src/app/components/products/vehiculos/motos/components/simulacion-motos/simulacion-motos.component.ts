import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { TarificadorService } from "src/app/services/tarificador.service";
import { BsDatepickerConfig, DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker";

import { ComboFeedService } from 'src/app/services/data/combofeed.service';
import { DatePickerConfigService } from 'src/app/config/date-picker-config';
import { Deducible } from 'src/app/domain/deducible';
import { Plan } from 'src/app/domain/plan';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-simulacion-motos",
  templateUrl: "./simulacion-motos.component.html",
  styleUrls: ["./simulacion-motos.component.css",
  "../../../../styles/simulacion/simulacion.css"]
})

export class SimulacionMotosComponent implements OnInit {
  motosForm: FormGroup;

  PRODUCTO = "motos";
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
  usoMotoSelected: any;
  subUsoVehiculoSelected: any;
  tallerSelected: any;
  asistenciaSelected: any;
  rcsEnExcesoSelected: any;
  tipoOperacionSelected: any;

  clasificacionSelected: any;
  cilindradaMotoSelected: any;

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
  CILINDRADAS_MOTOS: any[];

  CLASIFICACIONES_MOTOS: any[];
  USOS_MOTOS: any;
    
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
    this.USOS_MOTOS = this.comboFeedService.getUsosMotos();
    
    this.COMUNAS = this.comboFeedService.getComunas();
    this.TALLERES = this.comboFeedService.getTalleres();;
    this.ASISTENCIAS = this.comboFeedService.getAsistencias();
    
    this.ESTADOS_VEHICULO = this.comboFeedService.getEstadosVehiculo();
    this.TIPOS_DOCUMENTO = this.comboFeedService.getTiposDocumento();
    this.DESCUENTO_RECARGO = this.comboFeedService.getOpcionesDescuentoRecargo();

    this.CLASIFICACIONES_MOTOS = this.comboFeedService.getClasificacionesMotos();
    this.CILINDRADAS_MOTOS = this.comboFeedService.getCilindradasMotos();

    //Inicializacion de deducibles y planes para tarificacion
    this.deduciblesExistentes = [
      {codigoDeducible: "1", descripcionDeducible: "0 UF"}
    ]
    this.planesExistentes = [
      {codigoActividad: "1", descripcionActividad: "Plan L Particular"},
      {codigoActividad: "2", descripcionActividad: "Plan M Particular"},
      {codigoActividad: "3", descripcionActividad: "Plan S Particular"}]
  
      /**
       * GENERACION FORMULARIO
       */
      this.motosForm = new FormGroup({
        vehiculo: new FormGroup({
          estado: new FormControl("", [Validators.required]),
          patente: new FormControl("", []),
          clasificacion: new FormControl("", [Validators.required]),
          anio: new FormControl("", [Validators.required]),
          marca: new FormControl("", [Validators.required]),
          modelo: new FormControl("", [Validators.required]),
          companiaAnterior: new FormControl("", [Validators.required]),
          uso: new FormControl("", [Validators.required]),
          cilindrada: new FormControl("", [Validators.required]),
        }),
        persona: new FormGroup({
          tipoDocumento: new FormControl("", [Validators.required]),
          numeroDocumento: new FormControl("", [Validators.required]),
          primerNombre: new FormControl("", [Validators.required]),
          apellidoPaterno: new FormControl("", [Validators.required]),
          comuna: new FormControl("", [Validators.required]),
          email: new FormControl("", [Validators.required, Validators.email]),
          fechaInicioNuevaVigencia: new FormControl("", [Validators.required]),
        }),
        adicionales: new FormGroup({
          taller: new FormControl("", []),
          asistencia: new FormControl("", []),
        })
      })  
  
  
    }

  async tarificar() {

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Tarificando, espere por favor ..."
    });
    Swal.showLoading();

    setTimeout(async () => {
      this.simulaciones = await this.tarificadorService.tarificarMotos();

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

  recibeSeleccion(seleccion) {
    console.log(seleccion)
  }
}
