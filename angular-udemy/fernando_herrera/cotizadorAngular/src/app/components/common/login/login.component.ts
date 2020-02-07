import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
    localStorage.setItem("logged", "0")
   }
  @Output() logged = new EventEmitter();

  ngOnInit() {
  }

  login() {
    console.log("emitiendo estado")
    localStorage.setItem('logged', '1');
    this.logged.emit(1)
  }
}
