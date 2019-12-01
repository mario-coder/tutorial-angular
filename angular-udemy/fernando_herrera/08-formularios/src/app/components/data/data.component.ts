import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Rx";

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
          Validators.minLength(3),
          this.noHerrera
        ])
      }),
      correo: new FormControl("", [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      username: new FormControl("", [Validators.required], this.existeUsuario),
      password1: new FormControl("", [Validators.required]),
      password2: new FormControl()
    });

    this.forma.controls["password2"].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);

    //this.forma.valueChanges.subscribe(data => {

    //Validacion cambio de valor de un campo
    this.forma.get("nombreCompleto.nombre").valueChanges.subscribe(data => {
      console.log(data);
    });

    //Validacion cambio de estado de un campo
    this.forma.get("nombreCompleto.nombre").statusChanges.subscribe(data => {
      console.log(data);
    });
    //this.forma.setValue(this.usuario);
  }

  guardarCambios() {
    console.log(this.forma.value);
    this.forma.reset();
  }

  noHerrera(control: FormControl) {
    return control.value === "herrera" ? { noherrera: false } : null;
  }

  noIgual(control: FormControl) {
    let forma = this;
    return control.value !== forma.controls["password1"].value
      ? { noiguales: true }
      : null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "strider") {
          resolve({ existe: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promesa;
  }

  ngOnInit() {}
}
