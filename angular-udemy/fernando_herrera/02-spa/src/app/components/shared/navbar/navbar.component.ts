import { Component, OnInit } from "@angular/core";
import { HeroesService } from "src/app/services/heroes.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
  constructor(private _heroesService: HeroesService) {}

  ngOnInit() {}

  buscarHeroe(termino: string) {
    this._heroesService.buscarHeroes(termino);
    console.log(termino);
  }
}
