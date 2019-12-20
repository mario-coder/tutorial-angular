import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TarificadorService } from 'src/app/services/tarificador.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  estadosVehiculo: any[];
  selectedEstadoVehiculo: any;
  es: any;
  invalidDates: Array<Date>
  tarificado:boolean = true;

  constructor(private tarificadorService: TarificadorService) {
    
  }

  ngOnInit(): void {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
    }
 
  
    this.estadosVehiculo = [
      {label:"Nuevo", code:"1"},
      {label:"Usado", code:"2"}
    ];
  
  
  
  }

  async tarificar() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Tarificando, espere por favor ...'
    });
    Swal.showLoading();

    await this.tarificadorService.tarificar()

    Swal.close()
  }
 
}
