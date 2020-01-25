import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _isLoggedIn : number = 1;
  title = 'cotizadorAngular';
  
  constructor(private router: Router) { 
    
  }

  ngOnInit() {

  }

  setLogged(logueado) {
    console.log("seteando logueado "+ logueado)
    this._isLoggedIn = logueado
    this.router.navigateByUrl("/home-cotizador")
  }
}
