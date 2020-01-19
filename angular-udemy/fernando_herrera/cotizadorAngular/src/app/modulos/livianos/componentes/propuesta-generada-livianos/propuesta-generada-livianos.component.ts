import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propuesta-generada-livianos',
  templateUrl: './propuesta-generada-livianos.component.html',
  styleUrls: ['./propuesta-generada-livianos.component.css']
})
export class PropuestaGeneradaLivianosComponent implements OnInit {

  uploadedFiles: any[] = [];
  _polizaEmitidaSelected: boolean = false;
  
  constructor(private router: Router) {}



  ngOnInit() {
  }

  emitirPoliza() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Emitiendo Poliza ...',
      timer: 3000
    }).then(() => {
      this._polizaEmitidaSelected = true;
  
      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text: 'Poliza emitida exitosamente',
        confirmButtonText: 'Aceptar'
      }).then(() => {
          this.router.navigateByUrl("/poliza-emitida-livianos");
      });
    });
    Swal.showLoading();

    console.log("Emitiendo poliza ...")
  }
}
