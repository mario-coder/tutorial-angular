import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  //paises: any[] = [];

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotifyService: SpotifyService) {
    // this.http
    //   .get("https://restcountries.eu/rest/v2/lang/es")
    //   .subscribe(respuesta => {
    //     this.paises = respuesta;
    //     console.log(respuesta);
    //   });

    this.loading = true;
    this.error = false;

    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      },
      errorServicio => {
        this.loading = false;
        this.error = true;
        console.log(errorServicio.error.error.message);
        this.mensajeError = errorServicio.error.error.message;
      }
    );
  }

  ngOnInit() {}
}
