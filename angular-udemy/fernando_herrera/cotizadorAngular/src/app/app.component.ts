import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn : number = 0;
  title = 'cotizadorAngular';
  
  constructor(private router: Router) { 
    
  }

  ngOnInit() {

  }

  setLogged(logueado) {
    console.log("seteando logueado "+ logueado)
    this.isLoggedIn = logueado
    this.router.navigateByUrl("/home-cotizador")
  }
}
