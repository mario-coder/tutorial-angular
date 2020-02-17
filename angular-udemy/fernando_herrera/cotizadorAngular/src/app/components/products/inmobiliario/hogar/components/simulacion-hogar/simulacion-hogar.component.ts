import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { TarificadorService } from "src/app/services/tarificador.service";
import { BsDatepickerConfig, DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker";

import { ComboFeedService } from 'src/app/services/data/combofeed.service';
import { DatePickerConfigService } from 'src/app/config/date-picker-config';
import { Deducible } from 'src/app/domain/deducible';
import { Plan } from 'src/app/domain/plan';
import { Options } from 'ng5-slider';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-simulacion-hogar',
  templateUrl: './simulacion-hogar.component.html',
  styleUrls: ['./simulacion-hogar.component.css']
})

export class SimulacionHogarComponent implements OnInit {
  hogarForm: FormGroup;

  PRODUCTO = "hogar";
  _displayBuscarDocumento: boolean = false;
  _isLoggedIn : number = 1;
  
  SIMULACION:number = 1;
  PROPUESTA:number = 2;
  EMISION:number = 3;
  CURRENT_STAGE = this.SIMULACION;

  _propuestaActiva: boolean = false;


  bsConfig: Partial<BsDatepickerConfig>;
  dateCustomClasses: DatepickerDateCustomClasses[];
  
  asistencia: any;
  
  _aceptaDeclaracion: boolean;


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
  OCUPACIONES_RIESGO_HOGAR: any[];
  TIPOS_CONSTRUCCION_HOGAR: any[];
  TIPOS_VIAS_HOGAR: any[];
  ZONAS_HOGAR: any[];
    
  _tarificado: boolean = false;
  simulaciones: any[];
  
  deduciblesExistentes: Deducible[];
  planesExistentes: Plan[];
  valueSliderEdificioSelected: number;
  valueSliderContenidoSelected: number;
  optionsSliderEdificio: Options;
  optionsSliderContenido: Options;
 

  
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

    this.OCUPACIONES_RIESGO_HOGAR = this.comboFeedService.getOcupacionesRiesgoHogar();
    this.TIPOS_CONSTRUCCION_HOGAR = this.comboFeedService.getTiposConstruccionHogar();
    this.TIPOS_VIAS_HOGAR = this.comboFeedService.getTiposViasHogar();
    this.ZONAS_HOGAR = this.comboFeedService.getZonasHogar();

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
  
  
    this.optionsSliderEdificio = {
      showTicksValues: true,
      stepsArray: [
        {value: 0,     legend: '0 UF'},
        {value: 1000,  legend: '1000 UF'},
        {value: 2000,  legend: '2000 UF'},
        {value: 3000,  legend: '3000 UF'},
        {value: 4000,  legend: '4000 UF'},
        {value: 5000,  legend: '5000 UF'},
        {value: 7000,  legend: '7000 UF'},
        {value: 10000, legend: '10000 UF'},
        {value: 12000, legend: '12000 UF'},
        {value: 15000, legend: '15000 UF'},
        ]
      };

      this.optionsSliderContenido = {
        showTicksValues: true,
        stepsArray: [
          {value: 0,     legend: '0 UF'},
          {value: 1000,  legend: '1000 UF'},
          {value: 2000,  legend: '2000 UF'},
          {value: 3000,  legend: '3000 UF'},
          {value: 4000,  legend: '4000 UF'},
          {value: 5000,  legend: '5000 UF'},
          {value: 7000,  legend: '7000 UF'},
          {value: 10000, legend: '10000 UF'},
          {value: 12000, legend: '12000 UF'},
          {value: 15000, legend: '15000 UF'},
          ]
      };

      /**
       * GENERACION FORMULARIO
       */
      this.hogarForm = new FormGroup({
        persona: new FormGroup({
          tipoDocumento: new FormControl("", [Validators.required]),
          numeroDocumento: new FormControl("", [Validators.required]),
          primerNombre: new FormControl("", [Validators.required]),
          apellidoPaterno: new FormControl("", [Validators.required]),
          comuna: new FormControl("", [Validators.required]),
          email: new FormControl("", [Validators.required, Validators.email]),
          perfil: new FormControl("", [Validators.required]),
        }),
        inmueble: new FormGroup({
          anioConstruccion: new FormControl("", []),
          ocupacion: new FormControl("", [Validators.required]),
          tipoConstruccion: new FormControl("", [Validators.required]),
          fechaInicioNuevaVigencia: new FormControl("", [Validators.required]),
        }),
        direccion: new FormGroup({
          tipoVia: new FormControl("", [Validators.required]),
          direccion: new FormControl("", [Validators.required]),
          numero: new FormControl("", [Validators.required]),
          pisoDepto: new FormControl("", []),
          comuna: new FormControl("", [Validators.required]),
          zona: new FormControl("", [Validators.required]),
        }),
        montoAsegurado: new FormGroup({
          edificio: new FormControl("0", []),
          contenido: new FormControl("0", []),
        }),
        opcionales: new FormGroup({
          cristales: new FormControl("", []),
          responsabilidadCivil: new FormControl("", []),
          inhabitabilidad: new FormControl("", []),
          asistencia: new FormControl("", []),
          opcionAsistencia: new FormControl({value:"", disabled: true}, []),
          accidentesPersonales: new FormControl("", []),
          perdidasArriendo: new FormControl("", []),
        }),
        aceptaDeclaracion: new FormControl("", [Validators.required]),
        descuentoRecargo: new FormControl("", [Validators.required]),
      })

      this.hogarForm.statusChanges.subscribe(
        result => console.log(this.hogarForm)
      );

      this.validateDisabledFields();
    }

  async tarificar() {

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Tarificando, espere por favor ..."
    });
    Swal.showLoading();

    setTimeout(async () => {
      this.simulaciones = await this.tarificadorService.tarificarHogar();

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

 validateDisabledFields() {
    this.hogarForm.controls["opcionales"]["controls"]["asistencia"].value == false || this.hogarForm.controls["opcionales"]["controls"]["asistencia"].value == "" ? 
    this.hogarForm.controls["opcionales"]["controls"]["opcionAsistencia"].disable() : 
    this.hogarForm.controls["opcionales"]["controls"]["opcionAsistencia"].enable();

    this.hogarForm.controls["opcionales"]["controls"]["asistencia"].valueChanges
     .subscribe(selectedAsistencia => {
         if (selectedAsistencia) {
           this.hogarForm.controls["opcionales"]["controls"]["opcionAsistencia"].enable();
         } else {
           this.hogarForm.controls["opcionales"]["controls"]["opcionAsistencia"].disable();
         }
     });
 }

}
