import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { TarificadorService } from "src/app/services/tarificador.service";
import { BsDatepickerConfig, BsLocaleService } from "ngx-bootstrap/datepicker";
import { defineLocale } from "ngx-bootstrap/chronos";
import { esLocale } from "ngx-bootstrap/locale";
defineLocale("es", esLocale);

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  estadosVehiculo: any[];
  anios: any[];
  marcas: any[];
  modelos: any[];
  tiposDocumento: any[];
  comunas: any[];
  colorTheme = "theme-dark-blue";
  bsConfig: Partial<BsDatepickerConfig>;

  selectedEstadoVehiculo: any;
  es: any;
  invalidDates: Array<Date>;
  tarificado: boolean = true;
  simulaciones: any[];
  tarifasClasificadas: any = {};
  locale = "es";

  constructor(
    private tarificadorService: TarificadorService,
    private localeService: BsLocaleService
  ) {}

  applyLocale(pop: any) {
    this.localeService.use(this.locale);
    pop.hide();
    pop.show();
  }

  ngOnInit(): void {
    this.bsConfig = Object.assign(
      {},
      { containerClass: this.colorTheme, isAnimated: true }
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

    this.estadosVehiculo = [
      { label: "Nuevo", code: "1" },
      { label: "Usado", code: "2" }
    ];
    this.anios = [
      { label: "2020", code: "1" },
      { label: "2019", code: "2" }
    ];
    this.marcas = [
      { label: "Chevrolet", code: "1" },
      { label: "Ford", code: "2" }
    ];
    this.modelos = [
      { label: "Aveo", code: "1" },
      { label: "Focus", code: "2" }
    ];
    this.tiposDocumento = [
      { label: "PERSONA NATURAL", code: "1" },
      { label: "PERSONA JURIDICA", code: "2" }
    ];
    this.comunas = [
      { label: "LAS CONDES", code: "1" },
      { label: "PROVIDENCIA", code: "2" }
    ];
  }

  async tarificar() {
    let simulaciones: any[];

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Tarificando, espere por favor ..."
    });
    Swal.showLoading();

    setTimeout(async () => {
      simulaciones = await this.tarificadorService.tarificar();

      this.tarifasClasificadas = this.clasificacionTarifas(simulaciones);

      console.log("this.tarifasclasificadas");
      console.log(this.tarifasClasificadas);

      // Swal.fire({
      //   allowOutsideClick: false,
      //   icon: 'success',
      //   text: 'Proceso exitoso',
      //   showConfirmButton: true
      // });

      Swal.close();
    }, 1000);
  }

  clasificacionTarifas(simulaciones: any) {
    let tarifasClasificadas: any = {};

    simulaciones.map(simulacion => {
      console.log(simulacion.descripcionActividad);
      let codigoTarifaGrilla =
        simulacion.codigoActividad + "-" + simulacion.codigoDeducible;
      if (tarifasClasificadas[codigoTarifaGrilla] === undefined) {
        tarifasClasificadas[codigoTarifaGrilla] = [];
      }
      tarifasClasificadas[codigoTarifaGrilla].push(simulacion);
    });

    //console.log("Tarifas Clasificadas")
    //console.log(tarifasClasificadas)

    return tarifasClasificadas;
  }

  saludo() {
    console.log("hola mundirijillo");
  }
}
