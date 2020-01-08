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
  
  ngOnInit() {
    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl("", [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl("", [Validators.required, Validators.minLength(3), this.noHerrera])
      }),
      correo: new FormControl("", [Validators.required, Validators.email]),
      pasatiempos: new FormArray([new FormControl("", [Validators.required])]),
      username: new FormControl("", [Validators.required], this.existeUsuario),
      password1: new FormControl("", [Validators.required])
    });
    this.forma.addControl('password2', new FormControl("", [Validators.required, this.noIgual.bind(this)]))
  }

  constructor() {
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

  noIgual = (control: FormControl) => control.value !== this.forma.controls["password1"].value? { noiguales: true } : null;
  
  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "mario") {
          resolve({ existe: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promesa;
  }
}
