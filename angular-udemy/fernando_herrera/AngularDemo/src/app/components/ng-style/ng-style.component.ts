import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-style",
  template: `
    <h1>NG-STYLE</h1>

    <p [ngStyle]="{ 'font-size': tamano + 'px;', color: 'red' }">
      Hola mundo ... esta es una etiqueta
    </p>
    <hr />
    <p [style.fontSize.px]="tamano">
      Hola mundo ... esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 10">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 10">
      <i class="fa fa-minus"></i>
    </button>

    <hr>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano: number = 20;

  constructor() {}

  ngOnInit() {}
}
