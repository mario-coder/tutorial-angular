import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poliza-emitida-livianos',
  templateUrl: './poliza-emitida-livianos.component.html',
  styleUrls: ['./poliza-emitida-livianos.component.css']
})
export class PolizaEmitidaLivianosComponent implements OnInit {

  _displayVerDocumentos: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nuevaSimulacion() {
    this.router.navigateByUrl("/simulacion-livianos");
  }
}
