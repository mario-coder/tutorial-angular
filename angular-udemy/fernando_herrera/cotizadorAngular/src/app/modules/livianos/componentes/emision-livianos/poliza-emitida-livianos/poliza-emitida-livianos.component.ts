import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Base64Service } from 'src/app/services/base64.service';
import { ExportService } from 'src/app/services/export.service';
import { EmisionService } from 'src/app/services/emision.service';

@Component({
  selector: 'app-poliza-emitida-livianos',
  templateUrl: './poliza-emitida-livianos.component.html',
  styleUrls: ['../../../../../shared/styles/emision/poliza-emitida/poliza-emitida.css']
})
export class PolizaEmitidaLivianosComponent implements OnInit {

  _displayVerDocumentos: boolean = false;
  emision: any = {};

  constructor(private router: Router,
    private emisionService: EmisionService,
    private base64Service: Base64Service,
    private exportService: ExportService) { }

  ngOnInit() {
    this.emision = this.emisionService.doEmision();
  }

  descargarDocumento(indice, event) {
    let documento = this.emision.documento[indice];
    let docBlob = this.base64Service.strBase64ToPdfBlob(documento.contenido);
    
    let fileName = documento.nombreDocumento;
    this.exportService.savePdfBlobAsPdfFile(docBlob, fileName);
  }

  nuevaSimulacion() {
    this.router.navigateByUrl("/simulacion-livianos");
  }
}
