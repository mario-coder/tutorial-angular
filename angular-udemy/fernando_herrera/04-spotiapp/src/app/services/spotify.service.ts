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
        "Bearer BQC0o7uDGMyI6SSofSP_l19HzyAwHECUSDIOsxUkkVYcq0D0xW3gUhlF6WCvznGybOuN8_cUveQ6o4gpkjw"
    });

    this.http
      .get("https://api.spotify.com/v1/browse/new-releases", { headers })
      .subscribe(data => {
        console.log(data);
      });
  }
}
