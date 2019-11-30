import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styles: []
})
export class DataComponent implements OnInit {
  forma: FormGroup;
  usuario: any = {
    nombreCompleto: {
      nombre: "mario",
      apellido: "bonilla"
    },
    correo: "mario@mario.cl"
  };
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$";

  constructor() {
    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ])
      }),
      correo: new FormControl("", [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ])
    });

    this.forma.setValue(this.usuario);
  }

  guardarCambios() {
    console.log(this.forma.value);
    this.forma.reset();
  }

  ngOnInit() {}
}
