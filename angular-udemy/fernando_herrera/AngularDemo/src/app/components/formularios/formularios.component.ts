import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  forma: FormGroup;
  usuario: any = {
    nombreCompleto: {
      nombre: "mario",
      apellido: "bonilla"
    },
    correo: "mario@mario.cl",
    pasatiempos: ["Comer", "Dormir", "Correr"]
  };
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$";

  constructor() {
    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl("", [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl("", [Validators.required, Validators.minLength(3), this.noHerrera])
      }),
      correo: new FormControl("", [Validators.required, Validators.pattern(this.emailPattern)]),
      pasatiempos: new FormArray([new FormControl("", [Validators.required])]),
      username: new FormControl("", [Validators.required], this.existeUsuario),
      password1: new FormControl("", [Validators.required]),
      password2: new FormControl()
    });

    this.forma.controls["password2"].setValidators([Validators.required, this.noIgual.bind(this.forma)]);

    //Validacion cambio de valor de un campo
    //this.forma.valueChanges.subscribe(data => {
    this.forma.get("nombreCompleto.nombre").valueChanges.subscribe(data => {
      console.log(data);
    });

    //Validacion cambio de estado de un campo
    this.forma.get("nombreCompleto.nombre").statusChanges.subscribe(data => {
      console.log(data);
    });
    //this.forma.setValue(this.usuario);
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls["pasatiempos"]).push(
      new FormControl("", [Validators.required])
    );
  }

  guardarCambios() {
    console.log(this.forma.value);
    this.forma.reset();
  }

  noHerrera(control: FormControl) {
    return control.value === "herrera" ? { noherrera: false } : null;
  }

  noIgual(control: FormControl) {
    console.table(this)
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
