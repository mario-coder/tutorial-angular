import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider
    //slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'graficos';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
