import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComboFeedService } from 'src/app/services/data/combofeed.service';

@Component({
  selector: 'app-buscar-documentos-livianos',
  templateUrl: './buscar-documentos-livianos.component.html',
  styleUrls: ['./buscar-documentos-livianos.component.css']
})
export class BuscarDocumentosLivianosComponent implements OnInit {

  // @Output() displayChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  TIPOS_OPERACION: any;

  constructor(private comboFeedService: ComboFeedService) { }

  ngOnInit() {
    this.TIPOS_OPERACION = this.comboFeedService.getTiposOperacion();
  }
  
  emitOnHide() {
    // this.displayChange.emit(false)
  }
}
