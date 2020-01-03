import { Component, OnInit } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit {
  ngOnInit(): void {
    registerLocaleData(localeEs, 'es');
  }

  nombre = "Mario";
  nombre2 = "mario eduardo bonilla munoz";

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  fecha = new Date();

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      edad: "19"
    }
  };
  
  video = "UsGX4zaa014";

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Llego la data"), 3500);
  });

  activar: boolean = true;
}