import { Component, OnInit } from "@angular/core";
import { BsDatepickerConfig, BsLocaleService } from "ngx-bootstrap/datepicker";
import { defineLocale } from "ngx-bootstrap/chronos";
import { esLocale } from "ngx-bootstrap/locale";
defineLocale("es", esLocale);

@Component({
  selector: "app-consulta-simulacion",
  templateUrl: "./consulta-simulacion.component.html",
  styleUrls: ["./consulta-simulacion.component.css"]
})
export class ConsultaSimulacionComponent implements OnInit {
  sidebarHidden: boolean = false;
  opcionMenu: string = "Ocultar Menu";
  iconoOpcionMenu: string = "fa-close";

  colorTheme = "theme-dark-blue";
  bsConfig: Partial<BsDatepickerConfig>;
  locale = "es";
  es: any;

  constructor(private localeService: BsLocaleService) {}

  ngOnInit() {
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
    this.iconoOpcionMenu = this.sidebarHidden ? "fa-list" : "fa-close";
  }
}
