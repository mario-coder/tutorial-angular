import { Component, OnInit } from "@angular/core";
import { BsDatepickerConfig, DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker";
import Swal from 'sweetalert2';
import { DatePickerConfigService } from 'src/app/shared/config/date-picker-config';

@Component({
  selector: "app-consulta-simulacion",
  templateUrl: "./consulta-simulacion.component.html",
  styleUrls: ["./consulta-simulacion.component.css"]
})
export class ConsultaSimulacionComponent implements OnInit {
  isLoggedIn : number = 1;
  sidebarHidden: boolean = false;
  busquedaRealizada: boolean = false;
  opcionMenu: string = "Ocultar Menu";
  iconoOpcionMenu: string = "fa-window-close";

  bsConfig: Partial<BsDatepickerConfig>;
  dateCustomClasses: DatepickerDateCustomClasses[];

  comunas: any[];
  marcas: any[];
  modelos: any[];
  anios: any[];
  tiposDocumento: any[];
  
  constructor(private datePickerConfig: DatePickerConfigService) {}
  
  ngOnInit() {
    this.datePickerConfig.init();
    this.bsConfig = this.datePickerConfig.bsConfig;
    this.dateCustomClasses = this.datePickerConfig.dateCustomClasses;

    this.comunas = [
      { label: "LAS CONDES", code: "1" },
      { label: "PROVIDENCIA", code: "2" }
    ];
    this.marcas = [
      { label: "Chevrolet", code: "1" },
      { label: "Ford", code: "2" }
    ];
    this.modelos = [
      { label: "Aveo", code: "1" },
      { label: "Focus", code: "2" }
    ];
    this.anios = [
      { label: "2020", code: "1" },
      { label: "2019", code: "2" }
    ];
    this.tiposDocumento = [
      { label: "PERSONA NATURAL", code: "1" },
      { label: "PERSONA JURIDICA", code: "2" }
    ];
  }

  toggleMenu() {
    this.sidebarHidden = !this.sidebarHidden;

    this.opcionMenu = this.sidebarHidden ? "Mostrar Menu" : "Ocultar Menu";
    this.iconoOpcionMenu = this.sidebarHidden ? "fa-list" : "fa-window-close";
  }

  buscar(){
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Buscando registros ...',
      timer: 3000
    }).then(() => {
      this.busquedaRealizada = true;
  
      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text: 'Busqueda exitosa',
        confirmButtonText: 'Aceptar'
      });
    });
    Swal.showLoading();


    console.log("Buscando registros")
  }
}
