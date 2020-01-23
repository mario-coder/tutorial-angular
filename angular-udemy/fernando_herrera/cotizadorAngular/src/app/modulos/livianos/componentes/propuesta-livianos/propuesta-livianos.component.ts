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
  tiposDocumento:any[];

  FORMA_PAGO_PAC:string = "1";
  FORMA_PAGO_PAT:string = "2";
  FORMA_PAGO_DIRECTO:string = "3";

  RESPUESTA_SI = 1;
  RESPUESTA_NO = 2;

  bsConfig: Partial<BsDatepickerConfig>;
  dateCustomClasses: DatepickerDateCustomClasses[];

  respuestaPreexistenciasSelected : number;
  respuestaAccesoriosSelected : number;
  formaPagoSelected : any;
  obtenerTotalesSelected:boolean = false;
  propuestaGeneradaSelected:boolean = false;

  FORMAS_PAGO:any[] = [
    {label: "PAC", code: this.FORMA_PAGO_PAC}, 
    {label: "PAT", code: this.FORMA_PAGO_PAT}, 
    {label: "PAGO DIRECTO", code: this.FORMA_PAGO_DIRECTO}]
  comunas: any[];
    
    constructor(private router: Router,
      private datePickerConfig: DatePickerConfigService) { }
    
    ngOnInit() {
      /*Configuracion por defecto DatePicker*/
      this.datePickerConfig.init();
      this.bsConfig = this.datePickerConfig.bsConfig;
      this.dateCustomClasses = this.datePickerConfig.dateCustomClasses;

      this.formaPagoSelected = this.FORMAS_PAGO[0];

      this.tiposDocumento = [
        { label: "PERSONA NATURAL", code: "1" },
        { label: "PERSONA JURIDICA", code: "2" }
      ];

      this.comunas = [
        { label: "LAS CONDES", code: "1" },
        { label: "PROVIDENCIA", code: "2" }
      ];
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
