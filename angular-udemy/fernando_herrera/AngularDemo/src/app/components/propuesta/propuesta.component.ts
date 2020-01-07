import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {
  FORMA_PAGO_PAC:number = 1;
  FORMA_PAGO_PAT:number = 2;
  FORMA_PAGO_DIRECTO:number = 3;

  formaPagoSelected : number;
  
  FORMAS_PAGO:any[] = [
    {label: "PAC", code: this.FORMA_PAGO_PAC}, 
    {label: "PAT", code: this.FORMA_PAGO_PAT}, 
    {label: "PAGO DIRECTO", code: this.FORMA_PAGO_DIRECTO}]
    
    constructor() { }
    
    ngOnInit() {
      this.formaPagoSelected = this.FORMA_PAGO_PAC;
    }

  cambioFormaPago() {
    
  }
}
