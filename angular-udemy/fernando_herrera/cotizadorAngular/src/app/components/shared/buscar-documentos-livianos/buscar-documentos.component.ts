import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComboFeedService } from 'src/app/services/data/combofeed.service';

@Component({
  selector: 'app-buscar-documentos',
  templateUrl: './buscar-documentos.component.html',
  styleUrls: ['./buscar-documentos.component.css']
})
export class BuscarDocumentosLivianosComponent implements OnInit {

  @Input() producto;

  // @Output() displayChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  tipoOperacionSelected:any;
  TIPOS_OPERACION: any[];

  constructor(private comboFeedService: ComboFeedService) { }

  ngOnInit() {
    this.TIPOS_OPERACION = this.comboFeedService.getTiposOperacion();
  }
  
  emitOnHide() {
    // this.displayChange.emit(false)
  }
}
