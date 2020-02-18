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
  selector: "app-simulacion-livianos",
  templateUrl: "./simulacion-livianos.component.html",
  styleUrls: ["./simulacion-livianos.component.css",
  "../../../../styles/simulacion/simulacion.css"]
})

export class SimulacionLivianosComponent implements OnInit {
  livianosForm: FormGroup;

  PRODUCTO = "livianos";
  _displayBuscarDocumento: boolean = false;
  _isLoggedIn : number = 1;
  
  SIMULACION:number = 1;
  PROPUESTA:number = 2;
  EMISION:number = 3;
  CURRENT_STAGE = this.SIMULACION;

  _propuestaActiva: boolean = false;
  descuentoRecargoSelected: any;

  //Configuracion Datepicker
  bsConfig: Partial<BsDatepickerConfig>;
  dateCustomClasses: DatepickerDateCustomClasses[];
  
  //Combos
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
    this.USOS_VEHICULO = this.comboFeedService.getUsosVehiculo();
    this.COMUNAS = this.comboFeedService.getComunas();
    this.TALLERES = this.comboFeedService.getTalleres();;
    this.ASISTENCIAS = this.comboFeedService.getAsistencias();
    this.RCS_EN_EXCESO = this.comboFeedService.getRcsEnExceso();
    this.ESTADOS_VEHICULO = this.comboFeedService.getEstadosVehiculo();
    this.TIPOS_DOCUMENTO = this.comboFeedService.getTiposDocumento();
    this.DESCUENTO_RECARGO = this.comboFeedService.getOpcionesDescuentoRecargo();

    //Inicializacion de deducibles y planes para tarificacion
    this.deduciblesExistentes = [
      {codigoDeducible: "1", descripcionDeducible: "0 UF"},
      {codigoDeducible: "2", descripcionDeducible: "3 UF"},
      {codigoDeducible: "3", descripcionDeducible: "5 UF"},
      {codigoDeducible: "4", descripcionDeducible: "10 UF"}]
    this.planesExistentes = [
      {codigoActividad: "1", descripcionActividad: "XL Liviano Particular"},
      {codigoActividad: "2", descripcionActividad: "L Liviano Particular"},
      {codigoActividad: "3", descripcionActividad: "M Liviano Particular"},
      {codigoActividad: "4", descripcionActividad: "S Liviano Particular"}]


      /**
       * GENERACION FORMULARIO
       */
      this.livianosForm = new FormGroup({
        vehiculo: new FormGroup({
          estado: new FormControl("", [Validators.required]),
          patente: new FormControl("", []),
          anio: new FormControl("", [Validators.required]),
          marca: new FormControl("", [Validators.required]),
          modelo: new FormControl("", [Validators.required]),
          companiaAnterior: new FormControl("", [Validators.required]),
          uso: new FormControl("", [Validators.required]),
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
          rcEnExceso: new FormControl("", []),
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
      this.simulaciones = await this.tarificadorService.tarificarLivianos();

      this._tarificado = true;

      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text: 'Proceso de tarificacion exitoso',
        showConfirmButton: true
      });

    }, 2000);
  }

  reset() {
    this.livianosForm.reset();
  }

  comenzarPropuesta(){
    this._propuestaActiva = true;
  }

  recibeSeleccion(seleccion) {
    console.log(seleccion)
  }
}
