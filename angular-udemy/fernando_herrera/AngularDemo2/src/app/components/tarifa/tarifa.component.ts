import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent implements OnInit {

  @Input() simulacion: any;
  display: boolean = false;

  seleccionado = "";

  constructor() { }

  ngOnInit() {
  }


  showDetalleTarifa() {
      this.display = true;
  }

  selecciona() {
    console.log("selecciona")
    this.seleccionado="seleccionado"
  }
}
