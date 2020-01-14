import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propuesta-livianos',
  templateUrl: './propuesta-livianos.component.html',
  styleUrls: ['./propuesta-livianos.component.css']
})
export class PropuestaLivianosComponent implements OnInit {
  tiposDocumento:any[];

  FORMA_PAGO_PAC:number = 1;
  FORMA_PAGO_PAT:number = 2;
  FORMA_PAGO_DIRECTO:number = 3;

  formaPagoSelected : number;
  obtenerTotalesSelected:boolean = false;
  propuestaGeneradaSelected:boolean = false;

  FORMAS_PAGO:any[] = [
    {label: "PAC", code: this.FORMA_PAGO_PAC}, 
    {label: "PAT", code: this.FORMA_PAGO_PAT}, 
    {label: "PAGO DIRECTO", code: this.FORMA_PAGO_DIRECTO}]
  comunas: any[];
    
    constructor(private router: Router) { }
    
    ngOnInit() {
      this.formaPagoSelected = this.FORMA_PAGO_PAC;

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
