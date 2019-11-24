import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Spotify service listo");
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDT0_y6cSIQdQ2X7fduIylubnO45QZ73OE4bD7bXakmHdpdTqYfyaARrnUErcYtRyC5BQtbfArKgTtJLpw"
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {
      headers
    });
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDT0_y6cSIQdQ2X7fduIylubnO45QZ73OE4bD7bXakmHdpdTqYfyaARrnUErcYtRyC5BQtbfArKgTtJLpw"
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
      {
        headers
      }
    );
  }
}
