import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {

  cantidad:number = 0;

  constructor() { }

  ngOnInit() {
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }
}
