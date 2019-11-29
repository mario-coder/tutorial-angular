import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  constructor() {
    this.forma = new FormGroup({
      'nombre' : new FormControl('', Validators.required),
      'apellido' : new FormControl('', [Validators.required, Validators.minLength(3)]),
      'correo' : new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)])
    });
   }

   guardarCambios(){
    console.log(this.forma.value);
   }

  ngOnInit() {
  }

}
