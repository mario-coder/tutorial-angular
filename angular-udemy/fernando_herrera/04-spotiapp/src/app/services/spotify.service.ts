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
        "Bearer BQBxrVDVKjVTWmR7fHZeqkPG-snSrXXzRpPSaINOCXvL9Eytk5nCcJ0lU4W6cY0_M5M6kO_QYR-A1tu3yFE"
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {
      headers
    });
  }
}
