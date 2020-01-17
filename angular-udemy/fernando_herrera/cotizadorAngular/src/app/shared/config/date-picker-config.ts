import { Injectable } from '@angular/core';
import { defineLocale } from "ngx-bootstrap/chronos";
import { esLocale } from "ngx-bootstrap/locale";
import { BsDatepickerConfig, BsLocaleService, DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker";
defineLocale("es", esLocale);

@Injectable()

export class DatePickerConfigService {
  
  locale = "es";
  es: any;
  invalidDates: Array<Date>;

  colorTheme = "theme-dark-blue";
  bsConfig:Partial<BsDatepickerConfig>;
  dateCustomClasses: DatepickerDateCustomClasses[];

  constructor(private localeService: BsLocaleService) {}

  applyLocale(pop: any) {
      this.localeService.use(this.locale);
      pop.hide();
      pop.show();
  }
  
  init() {
    this.bsConfig = Object.assign(
      {},
      { containerClass: this.colorTheme, isAnimated: true, adaptivePosition: true, showWeekNumbers: false }
    );
    
    const now = new Date();
    this.dateCustomClasses = [
      { date: now, classes: ['bg-light', 'shadow-sm'] }
    ];

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
  
    this.localeService.use(this.locale);
  }
}