import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes2',
  templateUrl: './componentes2.component.html',
  styleUrls: ['./componentes2.component.css']
})
export class Componentes2Component implements OnInit {

  cantidad:number = 0;

  constructor() { }

  ngOnInit() {
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }
}
