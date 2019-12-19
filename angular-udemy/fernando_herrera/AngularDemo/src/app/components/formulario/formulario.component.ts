import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  estadosVehiculo: any[];
  selectedEstadoVehiculo: any;

  ngOnInit(): void {
    this.estadosVehiculo = [
      {label:"Nuevo", code:"1"},
      {label:"Usado", code:"2"}
    ];
  }

 
}
