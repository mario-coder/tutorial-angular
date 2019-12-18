import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  selectedEstado:any;
  estados:any[];

  constructor() { }

  ngOnInit() {
    this.estados = [
      {label: 'Nuevo', value: '1'},
      {label: 'Usado', value: '2'}
  ];
  }

}
