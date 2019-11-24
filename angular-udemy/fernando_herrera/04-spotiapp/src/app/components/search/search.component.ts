import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent {
  artistas: any[] = [];
  constructor(private spotifyService: SpotifyService) {}

  buscar(termino: string) {
    console.log(`termino: ${termino}`);

    this.spotifyService.getArtista(termino).subscribe((data: any) => {
      console.log(data);

      this.artistas = data;
    });
  }
}
