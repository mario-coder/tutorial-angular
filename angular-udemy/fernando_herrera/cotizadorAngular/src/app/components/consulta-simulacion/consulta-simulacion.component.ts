import { Component, OnInit } from "@angular/core";
import { BsDatepickerConfig, BsLocaleService } from "ngx-bootstrap/datepicker";
import { defineLocale } from "ngx-bootstrap/chronos";
import { esLocale } from "ngx-bootstrap/locale";
import Swal from 'sweetalert2';
defineLocale("es", esLocale);

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

  colorTheme = "theme-dark-blue";
  bsConfig: Partial<BsDatepickerConfig>;
  locale = "es";
  es: any;
  comunas: any[];
  marcas: any[];
  modelos: any[];
  anios: any[];
  tiposDocumento: any[];
  
  constructor(private localeService: BsLocaleService) {}
  
  ngOnInit() {
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
    
    this.bsConfig = Object.assign(
      {},
      {
        containerClass: this.colorTheme,
        isAnimated: true,
        adaptivePosition: true,
        showWeekNumbers: false
      }
    );
    this.localeService.use(this.locale);

    this.es = {
      firstDayOfWeek: 1,
      dayNames: [
        "domingo",
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes",
        "sábado"
      ],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
      ],
      monthNamesShort: [
        "ene",
        "feb",
        "mar",
        "abr",
        "may",
        "jun",
        "jul",
        "ago",
        "sep",
        "oct",
        "nov",
        "dic"
      ],
      today: "Hoy",
      clear: "Borrar"
    };
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
