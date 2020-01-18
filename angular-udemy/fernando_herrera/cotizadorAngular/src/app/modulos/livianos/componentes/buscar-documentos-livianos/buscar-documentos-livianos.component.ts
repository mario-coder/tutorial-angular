import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscar-documentos-livianos',
  templateUrl: './buscar-documentos-livianos.component.html',
  styleUrls: ['./buscar-documentos-livianos.component.css']
})
export class BuscarDocumentosLivianosComponent implements OnInit {

  // @Output() displayChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  
  emitOnHide() {
    this.displayChange.emit(false)
  }
}
