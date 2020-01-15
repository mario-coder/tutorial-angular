import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  estaAutenticado() {
    let logueado = (localStorage.getItem('logged') === "1")
    //alert(logueado)
    console.log("logueado : "+ logueado)
    return logueado
  }
}
