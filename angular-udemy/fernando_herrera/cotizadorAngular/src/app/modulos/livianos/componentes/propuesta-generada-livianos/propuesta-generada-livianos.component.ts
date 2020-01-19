import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
 
@Component({
  selector: 'app-propuesta-generada-livianos',
  templateUrl: './propuesta-generada-livianos.component.html',
  styleUrls: ['./propuesta-generada-livianos.component.css']
})
export class PropuestaGeneradaLivianosComponent implements OnInit {

  files: any[] = [];
  _polizaEmitidaSelected: boolean = false;

  constructor(private router: Router) {

  }

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

  onFileDropped(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }
}
