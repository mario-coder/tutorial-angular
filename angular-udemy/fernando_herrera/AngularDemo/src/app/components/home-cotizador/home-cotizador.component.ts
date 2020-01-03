import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';



@Component({
  selector: "app-home-cotizador",
  templateUrl: "./home-cotizador.component.html",
  styleUrls: ["./home-cotizador.component.css"]
})
export class HomeCotizadorComponent implements OnInit {
  fecha:Date = new Date();

  constructor(private router: Router) {
    this.newClock()
  }

  ngOnInit() {
    
    registerLocaleData(localeEs, 'es');
    console.log("init home")

  }

  goPage(page: string) {
    this.router.navigateByUrl(`/${page}`);
  }

  newClock() {
    setInterval( () => {
      this.fecha = new Date()
    }, 1000)
  }

}
