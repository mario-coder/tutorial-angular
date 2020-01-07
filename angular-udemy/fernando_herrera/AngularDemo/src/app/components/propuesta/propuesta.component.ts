import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {
  tiposDocumento:any[];

  FORMA_PAGO_PAC:number = 1;
  FORMA_PAGO_PAT:number = 2;
  FORMA_PAGO_DIRECTO:number = 3;

  formaPagoSelected : number;
  
  FORMAS_PAGO:any[] = [
    {label: "PAC", code: this.FORMA_PAGO_PAC}, 
    {label: "PAT", code: this.FORMA_PAGO_PAT}, 
    {label: "PAGO DIRECTO", code: this.FORMA_PAGO_DIRECTO}]
  comunas: any[];
    
    constructor() { }
    
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

  cambioFormaPago() {
    
  }
}
