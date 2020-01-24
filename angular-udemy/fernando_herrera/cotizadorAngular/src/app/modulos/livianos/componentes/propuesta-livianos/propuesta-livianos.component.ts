import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { BsDatepickerConfig, DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker";
import { DatePickerConfigService } from 'src/app/shared/config/date-picker-config';

@Component({
  selector: 'app-propuesta-livianos',
  templateUrl: './propuesta-livianos.component.html',
  styleUrls: ['./propuesta-livianos.component.css']
})
export class PropuestaLivianosComponent implements OnInit {
  TIPOS_DOCUMENTO:any[] = [
    { label: "PERSONA NATURAL", code: "1" },
    { label: "PERSONA JURIDICA", code: "2" }
  ];

  FORMA_PAGO_PAC:string = "1";
  FORMA_PAGO_PAT:string = "2";
  FORMA_PAGO_DIRECTO:string = "3";

  RESPUESTA_SI = 1;
  RESPUESTA_NO = 2;

  bsConfig: Partial<BsDatepickerConfig>;
  dateCustomClasses: DatepickerDateCustomClasses[];

  preexistenciasSelected : any;
  accesoriosSelected : any;
  modalidadIngresoSelected : any;
  respuestaMediosNotificacionSelected : any;
  formaPagoSelected : any;
  tipoCuentaSelected : any;
  bancoSelected : any;
  numeroCuotasSelected : any;
  tipoTarjetaSelected : any;
  diaPagoSelected : any;
  obtenerTotalesSelected:boolean = false;
  propuestaGeneradaSelected:boolean = false;

  FORMAS_PAGO:any[] = [
    {label: "PAC", code: this.FORMA_PAGO_PAC}, 
    {label: "PAT", code: this.FORMA_PAGO_PAT}, 
    {label: "PAGO DIRECTO", code: this.FORMA_PAGO_DIRECTO}]

  RESPUESTAS_SI_NO:any[] = [
    {label: "NO", code: this.RESPUESTA_NO},
    {label: "SI", code: this.RESPUESTA_SI}]
  
  COMUNAS: any[] = [
    { label: "LAS CONDES", code: "1" },
    { label: "PROVIDENCIA", code: "2" }
  ];
    
  MEDIOS_NOTIFICACION:any[] = [
    {label: "EMAIL", code: "1"},
    {label: "TELEFONO", code: "2"}
  ]

  NUMERO_CUOTAS:any[] = [
    {label: "1", code: "1"},
    {label: "2", code: "2"},
    {label: "3", code: "3"},
    {label: "4", code: "4"},
    {label: "5", code: "5"}
  ]

  DIAS_PAGO:any[] = [
    {label: "5", code: "5"},
    {label: "20", code: "20"}
  ]

  MODALIDADES_INGRESO:any[] = [
    {label: "FACTURA", code: "1"},
    {label: "INSPECCION", code: "2"}
  ];

  TIPOS_CUENTA:any[] = [
    {label: "CORRIENTE", code: "1"},
    {label: "VISTA", code: "2"}
  ]

  TIPOS_TARJETA:any[] = [
    {label: "VISA", code: "1"},
    {label: "MASTERCARD", code: "2"}
  ]

  BANCOS: any[] = [
    {label: "BCI", code: "1" },
    {label: "BICE", code: "2" },
    {label: "CHILE", code: "3" },
    {label: "Santander", code: "4" },
    {label: "Scotiabank", code: "5" }
  ];

    constructor(private router: Router,
      private datePickerConfig: DatePickerConfigService) { }
    
    ngOnInit() {
      /*Configuracion por defecto DatePicker*/
      this.datePickerConfig.init();
      this.bsConfig = this.datePickerConfig.bsConfig;
      this.dateCustomClasses = this.datePickerConfig.dateCustomClasses;

      this.formaPagoSelected = this.FORMAS_PAGO[0];
      this.modalidadIngresoSelected = this.MODALIDADES_INGRESO[0];
      //this.numeroCuotasSelected = this.NUMERO_CUOTAS[0];
      this.preexistenciasSelected = this.RESPUESTAS_SI_NO[0];
      this.accesoriosSelected = this.RESPUESTAS_SI_NO[0];
      this.respuestaMediosNotificacionSelected = this.MEDIOS_NOTIFICACION[0];

    }

  obtenerTotales() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Calculando Totales ...',
      timer: 2000
    }).then(() => {
      this.obtenerTotalesSelected = true;
      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text: 'Totales calculados exitosamente',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        console.log("Saliendo")
      });
    });
    Swal.showLoading();

    Swal.close();

    console.log("Calculando totales")
  }

  generarPropuesta() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Generando Propuesta ...',
      timer: 3000
    }).then(() => {
      this.propuestaGeneradaSelected = true;
  
      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text: 'Propuesta generada exitosamente',
        confirmButtonText: 'Aceptar'
      }).then(() => {
          this.router.navigateByUrl("/propuesta-generada-livianos");
      });
    });
    Swal.showLoading();


    console.log("Generando propuesta")
  }
}
