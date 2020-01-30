import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-seleccion-tarifas',
  templateUrl: './seleccion-tarifas.component.html',
  styleUrls: ['./seleccion-tarifas.component.css']
})
export class SeleccionTarifasComponent implements OnInit {

  constructor(private renderer: Renderer2, private elem: ElementRef){}

  ngOnInit() {
    // let elements = this.elem.nativeElement.querySelectorAll('.classImLookingFor');
  }

  chequearTodaLaFila(numeroFila, event) {
    let elements = this.elem.nativeElement.querySelectorAll(".fila-"+ numeroFila);

    elements.forEach((item, index) => item.checked = event)
  }

  chequearTodaLaColumna(numeroColumna, event) {
    let elements = this.elem.nativeElement.querySelectorAll(".columna-"+ numeroColumna);
console.log(elements)
console.log(event)
    elements.forEach((item, index) => item.checked = event)
  }
}
