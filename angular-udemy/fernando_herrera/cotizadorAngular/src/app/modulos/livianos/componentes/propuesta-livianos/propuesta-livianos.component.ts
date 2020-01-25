import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { BsDatepickerConfig, DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker";
import { DatePickerConfigService } from 'src/app/shared/config/date-picker-config';
import { ComboFeedService } from 'src/app/services/data/combofeed.service';

@Component({
  selector: 'app-propuesta-livianos',
  templateUrl: './propuesta-livianos.component.html',
  styleUrls: ['./propuesta-livianos.component.css']
})
export class PropuestaLivianosComponent implements OnInit {
  FORMA_PAGO_PAC:string = "1";
  FORMA_PAGO_PAT:string = "2";
  FORMA_PAGO_DIRECTO:string = "3";

  RESPUESTA_SI = 1;
  RESPUESTA_NO = 2;

  bsConfig: Partial<BsDatepickerConfig>;
  dateCustomClasses: DatepickerDateCustomClasses[];

  fechaExpiracion: any;

  preexistenciasSelected : any;
  accesoriosSelected : any;
  modalidadIngresoSelected : any;
  medioNotificacionSelected : any;
  formaPagoSelected : any;
  tipoCuentaSelected : any;
  bancoSelected : any;
  numeroCuotasSelected : any;
  tipoTarjetaSelected : any;
  diaPagoSelected : any;
  obtenerTotalesSelected:boolean = false;
  propuestaGeneradaSelected:boolean = false;

  FORMAS_PAGO:any[];
  RESPUESTAS_SI_NO:any[];
  COMUNAS: any[];    
  MEDIOS_NOTIFICACION:any[];
  NUMERO_CUOTAS:any[];
  DIAS_PAGO:any[];
  MODALIDADES_INGRESO:any[];
  TIPOS_CUENTA:any[];
  TIPOS_TARJETA:any[];
  BANCOS: any[];
  TIPOS_DOCUMENTO:any[];

    constructor(private router: Router,
      private comboFeedService: ComboFeedService,
      private datePickerConfig: DatePickerConfigService) { }
    
    ngOnInit() {
      /*Configuracion por defecto DatePicker*/
      this.datePickerConfig.init();
      this.bsConfig = this.datePickerConfig.bsConfig;
      this.dateCustomClasses = this.datePickerConfig.dateCustomClasses;

      this.FORMAS_PAGO = this.comboFeedService.getFormasDePago();
      this.RESPUESTAS_SI_NO = this.comboFeedService.getRespuestasSiNo();
      this.COMUNAS = this.comboFeedService.getComunas();
      this.MEDIOS_NOTIFICACION = this.comboFeedService.getMediosNotificacion();
      this.NUMERO_CUOTAS = this.comboFeedService.getNumeroCuotas();
      this.DIAS_PAGO = this.comboFeedService.getDiasDePago();
      this.MODALIDADES_INGRESO = this.comboFeedService.getModalidadesIngreso();
      this.TIPOS_CUENTA = this.comboFeedService.getTiposCuenta();
      this.TIPOS_TARJETA = this.comboFeedService.getTiposTarjeta();
      this.BANCOS = this.comboFeedService.getBancos();
      this.TIPOS_DOCUMENTO = this.comboFeedService.getTiposDocumento();


      this.formaPagoSelected = this.FORMAS_PAGO[0];
      this.modalidadIngresoSelected = this.MODALIDADES_INGRESO[0];
      //this.numeroCuotasSelected = this.NUMERO_CUOTAS[0];
      this.preexistenciasSelected = this.RESPUESTAS_SI_NO[0];
      this.accesoriosSelected = this.RESPUESTAS_SI_NO[0];
      this.medioNotificacionSelected = this.MEDIOS_NOTIFICACION[0];

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
