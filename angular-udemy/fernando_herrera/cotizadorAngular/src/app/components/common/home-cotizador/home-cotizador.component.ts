import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-cotizador",
  templateUrl: "./home-cotizador.component.html",
  styleUrls: ["./home-cotizador.component.css"]
})
export class HomeCotizadorComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    console.log("init home")
  }

  goPage(page: string) {
    this.router.navigateByUrl(`/${page}`);
  }



}
