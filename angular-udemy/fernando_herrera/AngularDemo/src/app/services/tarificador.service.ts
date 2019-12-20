import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TarificadorService {

  url: string="http://iaxistest.realechile.cl:8081/realeaxisconnect/simulacion";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin':'*'
      //,'Authorization': 'my-auth-token'
    })
  };
  
  request: any = {
    "codigoProducto": "9001",
    "codigoAgente": "20805455",
    "duracion": "0",
    "formaPago": "99",
    "numeroFidenslat": "",
    "usuarioCorredor": "CORR.SECURITY.WS",
    "fechaIniVigencia": "2019-11-26",
    "fechaFinVigencia": "2020-11-26",
    "contratante": {
        "pcpais": "152",
        "pregion": "13",
        "pcomuna": "13119",
        "pdireccion": "PINTó",
        "pnnumide": "18799329",
        "dv": "6",
        "pctipide": "41",
        "pfnacimi": "1995-01-06",
        "pcsexper": "1",
        "ptapelli1": "JORQUERA",
        "ptapelli2": "GARRIDO",
        "ptnombre": "FELIPE"
    },
    "vehiculo": {
        "version": "278035000",
        "anyo": "2019",
        "color": "",
        "kilometraje": "0",
        "kilometrosAnyo": "16",
        "motor": "1",
        "chasis": "",
        "tipoPatente": "2",
        "patente": "",
        "valor": "0.0",
        "nuevo": "0",
        "servicio": "1",
        "transporteCombustible": "0",
        "uso": "01",
        "subuso": "01",
        "garaje": "5",
        "descuento_recargo": "",
        "porcentaje_desc_rec": "0",
        "codigoAsistencia": "",
        "codigoTaller": ""
    },
    "preguntaspoliza": [
        {
            "pcpregun": "716",
            "pcrespue": "5"
        },
        {
            "pcpregun": "809",
            "pcrespue": "8"
        }
    ],
    "preguntasriesgo": [
        {
            "pcpregun": "729",
            "pcrespue": "5"
        },
        {
            "pcpregun": "730",
            "pcrespue": "1"
        },
        {
            "pcpregun": "731",
            "pcrespue": "14"
        },
        {
            "pcpregun": "7980",
            "pcrespue": "300"
        },
        {
            "pcpregun": "742",
            "pcrespue": "1"
        },
        {
            "pcpregun": "743",
            "pcrespue": "0"
        }
    ]
}
  

  constructor(private http: HttpClient) { 
    console.log('Tarificador Listo')
  }

  tarificar() {
    let tarifas;

    this.doTarificar().subscribe(simulaciones => {
      console.log(simulaciones);
      tarifas = simulaciones;
      //this.loadingArtist = false;
    });

    //console.log(tarifas)
  }

  doTarificar() {


    return this.http.post(this.url, this.request, this.httpOptions).pipe(
      map(data => data["simulaciones"]));
  }

}
