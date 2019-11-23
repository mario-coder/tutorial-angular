import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  paises: any[] = [];

  constructor(private spotifyService: SpotifyService) {
    // this.http
    //   .get("https://restcountries.eu/rest/v2/lang/es")
    //   .subscribe(respuesta => {
    //     this.paises = respuesta;
    //     console.log(respuesta);
    //   });

    this.spotifyService.getNewReleases();
  }

  ngOnInit() {}
}
