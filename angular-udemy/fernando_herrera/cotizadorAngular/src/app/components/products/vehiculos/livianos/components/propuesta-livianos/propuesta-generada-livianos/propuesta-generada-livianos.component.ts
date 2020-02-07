import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PropuestaService } from 'src/app/services/propuesta.service';
import { Base64Service } from 'src/app/services/base64.service';
import { ExportService } from 'src/app/services/export.service';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
 
@Component({
  selector: 'app-propuesta-generada-livianos',
  templateUrl: './propuesta-generada-livianos.component.html',
  styleUrls: ['../../../../../styles/propuesta/propuesta-generada/propuesta-generada.css']
})
export class PropuestaGeneradaLivianosComponent implements OnInit {

  files: any[] = [];
  propuesta: any = {};
  _polizaEmitidaSelected: boolean = false;
  _displayVerDocumentos: boolean = false;

  constructor(private router: Router, 
    private propuestaService: PropuestaService, 
    private base64Service: Base64Service,
    private exportService: ExportService) {

  }

  ngOnInit() {
    this.propuesta = this.propuestaService.doPropuesta();
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

  descargarDocumento(indice, event) {
    let documento = this.propuesta.documento[indice];
    let docBlob = this.base64Service.strBase64ToPdfBlob(documento.contenido);
    
    let fileName = documento.nombreDocumento;
    this.exportService.savePdfBlobAsPdfFile(docBlob, fileName);
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

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}
}
