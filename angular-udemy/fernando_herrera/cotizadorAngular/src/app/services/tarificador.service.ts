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
  
  requestLivianos: any = {
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
  

responseLivianos : any = {
    "succes": true,
    "exceptionCanonicalName": null,
    "error": null,
    "simulaciones": [
      // {
      //   "numeroSimulacion": "3716775",
      //   "codigoActividad": "1",
      //   "descripcionActividad": "XL Liviano Particular",
      //   "codigoDeducible": "1",
      //   "descripcionDeducible": "0 UF",
      //   "primaTarifa": "36.9961",
      //   "totalImpuestos": "10.9319",
      //   "primaTotal": "68.4686",
      //   "importePrimerRecibo": "68.4686",
      //   "mensaje": "",
      //   "coberturas": [
      //     {
      //       "codigoCobertura": "1300",
      //       "nombreCobertura": "Daños Materiales",
      //       "capitalCob": "373.1002",
      //       "deducibleCob": "1",
      //       "principalCob": "1",
      //       "primaTarifaCob": "26.9002",
      //       "primaNetaAnualAcob": "41.8354"
      //     },
      //     {
      //       "codigoCobertura": "1302",
      //       "nombreCobertura": "Robo, Hurto o Uso no Autorizado",
      //       "capitalCob": "373.1002",
      //       "deducibleCob": "1",
      //       "principalCob": "0",
      //       "primaTarifaCob": "4.0912",
      //       "primaNetaAnualAcob": "6.3627"
      //     },
      //     {
      //       "codigoCobertura": "1303",
      //       "nombreCobertura": "Robo de Accesorios",
      //       "capitalCob": "373.1002",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0000",
      //       "primaNetaAnualAcob": ".0000"
      //     },
      //     {
      //       "codigoCobertura": "1304",
      //       "nombreCobertura": "Daños Materiales por Actos Maliciosos",
      //       "capitalCob": "373.1002",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0000",
      //       "primaNetaAnualAcob": ".0000"
      //     },
      //     {
      //       "codigoCobertura": "1306",
      //       "nombreCobertura": "Daños al Vehículo durante Viaje al Extranjero",
      //       "capitalCob": "373.1002",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".1000",
      //       "primaNetaAnualAcob": ".1555"
      //     },
      //     {
      //       "codigoCobertura": "1310",
      //       "nombreCobertura": "Taller Reale",
      //       "capitalCob": "0",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0000",
      //       "primaNetaAnualAcob": ".0000"
      //     },
      //     {
      //       "codigoCobertura": "1313",
      //       "nombreCobertura": "RC Daño Emergente",
      //       "capitalCob": "3000",
      //       "deducibleCob": "1",
      //       "principalCob": "1",
      //       "primaTarifaCob": "3.0517",
      //       "primaNetaAnualAcob": "4.7461"
      //     },
      //     {
      //       "codigoCobertura": "1314",
      //       "nombreCobertura": "RC Daño Moral",
      //       "capitalCob": "3000",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".3815",
      //       "primaNetaAnualAcob": ".5933"
      //     },
      //     {
      //       "codigoCobertura": "1315",
      //       "nombreCobertura": "RC Lucro Cesante",
      //       "capitalCob": "3000",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".3815",
      //       "primaNetaAnualAcob": ".5933"
      //     },
      //     {
      //       "codigoCobertura": "1316",
      //       "nombreCobertura": "Daños a Terceros Causados por la Carga",
      //       "capitalCob": "3000",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0000",
      //       "primaNetaAnualAcob": ".0000"
      //     },
      //     {
      //       "codigoCobertura": "1318",
      //       "nombreCobertura": "Defensa Penal y Constitución de Fianzas",
      //       "capitalCob": "200",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0000",
      //       "primaNetaAnualAcob": ".0000"
      //     },
      //     {
      //       "codigoCobertura": "1319",
      //       "nombreCobertura": "Asiento de Pasajero",
      //       "capitalCob": "600",
      //       "deducibleCob": "0",
      //       "principalCob": "1",
      //       "primaTarifaCob": ".3000",
      //       "primaNetaAnualAcob": ".4666"
      //     },
      //     {
      //       "codigoCobertura": "1322",
      //       "nombreCobertura": "Asistencia C",
      //       "capitalCob": "0",
      //       "deducibleCob": "0",
      //       "principalCob": "1",
      //       "primaTarifaCob": "1.7900",
      //       "primaNetaAnualAcob": "2.7838"
      //     },
      //     {
      //       "codigoCobertura": "1374",
      //       "nombreCobertura": "Daños Materiales Causados por la Carga",
      //       "capitalCob": "373.1002",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0000",
      //       "primaNetaAnualAcob": ".0000"
      //     }
      //   ],
      //   "psu": [
      //     {
      //       "descrip": "Edad Asegurado",
      //       "estado": "Autorizado",
      //       "rolPsu": "60"
      //     },
      //     {
      //       "descrip": "Retroactividad",
      //       "estado": "Autorizado",
      //       "rolPsu": "25"
      //     }
      //   ],
      //   "amparos": []
      // },
      {
        "numeroSimulacion": "3716779",
        "codigoActividad": "1",
        "descripcionActividad": "XL Liviano Particular",
        "codigoDeducible": "2",
        "descripcionDeducible": "3 UF",
        "primaTarifa": "26.6352",
        "totalImpuestos": "7.8705",
        "primaTotal": "49.2939",
        "importePrimerRecibo": "49.2939",
        "mensaje": "",
        "coberturas": [
          {
            "codigoCobertura": "1300",
            "nombreCobertura": "Daños Materiales",
            "capitalCob": "373.1002",
            "deducibleCob": "0.69673",
            "principalCob": "1",
            "primaTarifaCob": "18.8927",
            "primaNetaAnualAcob": "29.3821"
          },
          {
            "codigoCobertura": "1302",
            "nombreCobertura": "Robo, Hurto o Uso no Autorizado",
            "capitalCob": "373.1002",
            "deducibleCob": "0.69673",
            "principalCob": "0",
            "primaTarifaCob": "2.8734",
            "primaNetaAnualAcob": "4.4687"
          },
          {
            "codigoCobertura": "1303",
            "nombreCobertura": "Robo de Accesorios",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1304",
            "nombreCobertura": "Daños Materiales por Actos Maliciosos",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1306",
            "nombreCobertura": "Daños al Vehículo durante Viaje al Extranjero",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1000",
            "primaNetaAnualAcob": ".1555"
          },
          {
            "codigoCobertura": "1310",
            "nombreCobertura": "Taller Reale",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1313",
            "nombreCobertura": "RC Daño Emergente",
            "capitalCob": "3000",
            "deducibleCob": "0.69673",
            "principalCob": "1",
            "primaTarifaCob": "2.1433",
            "primaNetaAnualAcob": "3.3333"
          },
          {
            "codigoCobertura": "1314",
            "nombreCobertura": "RC Daño Moral",
            "capitalCob": "3000",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".2679",
            "primaNetaAnualAcob": ".4167"
          },
          {
            "codigoCobertura": "1315",
            "nombreCobertura": "RC Lucro Cesante",
            "capitalCob": "3000",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".2679",
            "primaNetaAnualAcob": ".4167"
          },
          {
            "codigoCobertura": "1316",
            "nombreCobertura": "Daños a Terceros Causados por la Carga",
            "capitalCob": "3000",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1318",
            "nombreCobertura": "Defensa Penal y Constitución de Fianzas",
            "capitalCob": "200",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1319",
            "nombreCobertura": "Asiento de Pasajero",
            "capitalCob": "600",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".3000",
            "primaNetaAnualAcob": ".4666"
          },
          {
            "codigoCobertura": "1322",
            "nombreCobertura": "Asistencia C",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.7900",
            "primaNetaAnualAcob": "2.7838"
          },
          {
            "codigoCobertura": "1374",
            "nombreCobertura": "Daños Materiales Causados por la Carga",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          }
        ],
        "psu": [
          {
            "descrip": "Edad Asegurado",
            "estado": "Autorizado",
            "rolPsu": "60"
          },
          {
            "descrip": "Retroactividad",
            "estado": "Autorizado",
            "rolPsu": "25"
          }
        ],
        "amparos": []
      },
      {
        "numeroSimulacion": "3716781",
        "codigoActividad": "1",
        "descripcionActividad": "XL Liviano Particular",
        "codigoDeducible": "3",
        "descripcionDeducible": "5 UF",
        "primaTarifa": "22.6606",
        "totalImpuestos": "6.6959",
        "primaTotal": "41.9377",
        "importePrimerRecibo": "41.9377",
        "mensaje": "",
        "coberturas": [
          {
            "codigoCobertura": "1300",
            "nombreCobertura": "Daños Materiales",
            "capitalCob": "373.1002",
            "deducibleCob": "0.58113",
            "principalCob": "1",
            "primaTarifaCob": "15.8208",
            "primaNetaAnualAcob": "24.6047"
          },
          {
            "codigoCobertura": "1302",
            "nombreCobertura": "Robo, Hurto o Uso no Autorizado",
            "capitalCob": "373.1002",
            "deducibleCob": "0.58113",
            "principalCob": "0",
            "primaTarifaCob": "2.4062",
            "primaNetaAnualAcob": "3.7421"
          },
          {
            "codigoCobertura": "1303",
            "nombreCobertura": "Robo de Accesorios",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1304",
            "nombreCobertura": "Daños Materiales por Actos Maliciosos",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1306",
            "nombreCobertura": "Daños al Vehículo durante Viaje al Extranjero",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1000",
            "primaNetaAnualAcob": ".1555"
          },
          {
            "codigoCobertura": "1310",
            "nombreCobertura": "Taller Reale",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1313",
            "nombreCobertura": "RC Daño Emergente",
            "capitalCob": "3000",
            "deducibleCob": "0.58113",
            "principalCob": "1",
            "primaTarifaCob": "1.7948",
            "primaNetaAnualAcob": "2.7913"
          },
          {
            "codigoCobertura": "1314",
            "nombreCobertura": "RC Daño Moral",
            "capitalCob": "3000",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".2244",
            "primaNetaAnualAcob": ".3489"
          },
          {
            "codigoCobertura": "1315",
            "nombreCobertura": "RC Lucro Cesante",
            "capitalCob": "3000",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".2244",
            "primaNetaAnualAcob": ".3489"
          },
          {
            "codigoCobertura": "1316",
            "nombreCobertura": "Daños a Terceros Causados por la Carga",
            "capitalCob": "3000",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1318",
            "nombreCobertura": "Defensa Penal y Constitución de Fianzas",
            "capitalCob": "200",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1319",
            "nombreCobertura": "Asiento de Pasajero",
            "capitalCob": "600",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".3000",
            "primaNetaAnualAcob": ".4666"
          },
          {
            "codigoCobertura": "1322",
            "nombreCobertura": "Asistencia C",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.7900",
            "primaNetaAnualAcob": "2.7838"
          },
          {
            "codigoCobertura": "1374",
            "nombreCobertura": "Daños Materiales Causados por la Carga",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          }
        ],
        "psu": [
          {
            "descrip": "Edad Asegurado",
            "estado": "Autorizado",
            "rolPsu": "60"
          },
          {
            "descrip": "Retroactividad",
            "estado": "Autorizado",
            "rolPsu": "25"
          }
        ],
        "amparos": []
      },
      {
        "numeroSimulacion": "3716778",
        "codigoActividad": "1",
        "descripcionActividad": "XL Liviano Particular",
        "codigoDeducible": "4",
        "descripcionDeducible": "10 UF",
        "primaTarifa": "19.5278",
        "totalImpuestos": "5.7703",
        "primaTotal": "36.1399",
        "importePrimerRecibo": "36.1399",
        "mensaje": "",
        "coberturas": [
          {
            "codigoCobertura": "1300",
            "nombreCobertura": "Daños Materiales",
            "capitalCob": "373.1002",
            "deducibleCob": "0.48708",
            "principalCob": "1",
            "primaTarifaCob": "13.3130",
            "primaNetaAnualAcob": "20.7045"
          },
          {
            "codigoCobertura": "1302",
            "nombreCobertura": "Robo, Hurto o Uso no Autorizado",
            "capitalCob": "373.1002",
            "deducibleCob": "0.48708",
            "principalCob": "0",
            "primaTarifaCob": "2.0248",
            "primaNetaAnualAcob": "3.1489"
          },
          {
            "codigoCobertura": "1303",
            "nombreCobertura": "Robo de Accesorios",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1304",
            "nombreCobertura": "Daños Materiales por Actos Maliciosos",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1306",
            "nombreCobertura": "Daños al Vehículo durante Viaje al Extranjero",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1000",
            "primaNetaAnualAcob": ".1555"
          },
          {
            "codigoCobertura": "1310",
            "nombreCobertura": "Taller Reale",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1313",
            "nombreCobertura": "RC Daño Emergente",
            "capitalCob": "3000",
            "deducibleCob": "0.48708",
            "principalCob": "1",
            "primaTarifaCob": "1.6000",
            "primaNetaAnualAcob": "2.4883"
          },
          {
            "codigoCobertura": "1314",
            "nombreCobertura": "RC Daño Moral",
            "capitalCob": "3000",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".2000",
            "primaNetaAnualAcob": ".3110"
          },
          {
            "codigoCobertura": "1315",
            "nombreCobertura": "RC Lucro Cesante",
            "capitalCob": "3000",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".2000",
            "primaNetaAnualAcob": ".3110"
          },
          {
            "codigoCobertura": "1316",
            "nombreCobertura": "Daños a Terceros Causados por la Carga",
            "capitalCob": "3000",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1318",
            "nombreCobertura": "Defensa Penal y Constitución de Fianzas",
            "capitalCob": "200",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1319",
            "nombreCobertura": "Asiento de Pasajero",
            "capitalCob": "600",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".3000",
            "primaNetaAnualAcob": ".4666"
          },
          {
            "codigoCobertura": "1322",
            "nombreCobertura": "Asistencia C",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.7900",
            "primaNetaAnualAcob": "2.7838"
          },
          {
            "codigoCobertura": "1374",
            "nombreCobertura": "Daños Materiales Causados por la Carga",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          }
        ],
        "psu": [
          {
            "descrip": "Edad Asegurado",
            "estado": "Autorizado",
            "rolPsu": "60"
          },
          {
            "descrip": "Retroactividad",
            "estado": "Autorizado",
            "rolPsu": "25"
          }
        ],
        "amparos": []
      },
      {
        "numeroSimulacion": "3716780",
        "codigoActividad": "2",
        "descripcionActividad": "L Liviano Particular",
        "codigoDeducible": "1",
        "descripcionDeducible": "0 UF",
        "primaTarifa": "33.8201",
        "totalImpuestos": "9.9935",
        "primaTotal": "62.5908",
        "importePrimerRecibo": "62.5908",
        "mensaje": "",
        "coberturas": [
          {
            "codigoCobertura": "1300",
            "nombreCobertura": "Daños Materiales",
            "capitalCob": "373.1002",
            "deducibleCob": "1",
            "principalCob": "1",
            "primaTarifaCob": "26.9002",
            "primaNetaAnualAcob": "41.8354"
          },
          {
            "codigoCobertura": "1302",
            "nombreCobertura": "Robo, Hurto o Uso no Autorizado",
            "capitalCob": "373.1002",
            "deducibleCob": "1",
            "principalCob": "0",
            "primaTarifaCob": "4.0912",
            "primaNetaAnualAcob": "6.3627"
          },
          {
            "codigoCobertura": "1303",
            "nombreCobertura": "Robo de Accesorios",
            "capitalCob": "55.965",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1304",
            "nombreCobertura": "Daños Materiales por Actos Maliciosos",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1306",
            "nombreCobertura": "Daños al Vehículo durante Viaje al Extranjero",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1000",
            "primaNetaAnualAcob": ".1555"
          },
          {
            "codigoCobertura": "1310",
            "nombreCobertura": "Taller Reale",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1313",
            "nombreCobertura": "RC Daño Emergente",
            "capitalCob": "1500",
            "deducibleCob": "1",
            "principalCob": "1",
            "primaTarifaCob": "1.3428",
            "primaNetaAnualAcob": "2.0883"
          },
          {
            "codigoCobertura": "1314",
            "nombreCobertura": "RC Daño Moral",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1678",
            "primaNetaAnualAcob": ".2610"
          },
          {
            "codigoCobertura": "1315",
            "nombreCobertura": "RC Lucro Cesante",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1678",
            "primaNetaAnualAcob": ".2610"
          },
          {
            "codigoCobertura": "1316",
            "nombreCobertura": "Daños a Terceros Causados por la Carga",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1318",
            "nombreCobertura": "Defensa Penal y Constitución de Fianzas",
            "capitalCob": "150",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1319",
            "nombreCobertura": "Asiento de Pasajero",
            "capitalCob": "450",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".1200",
            "primaNetaAnualAcob": ".1866"
          },
          {
            "codigoCobertura": "1321",
            "nombreCobertura": "Asistencia B",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".9303",
            "primaNetaAnualAcob": "1.4468"
          },
          {
            "codigoCobertura": "1374",
            "nombreCobertura": "Daños Materiales Causados por la Carga",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          }
        ],
        "psu": [
          {
            "descrip": "Edad Asegurado",
            "estado": "Autorizado",
            "rolPsu": "60"
          },
          {
            "descrip": "Retroactividad",
            "estado": "Autorizado",
            "rolPsu": "25"
          }
        ],
        "amparos": []
      },
      {
        "numeroSimulacion": "3716776",
        "codigoActividad": "2",
        "descripcionActividad": "L Liviano Particular",
        "codigoDeducible": "2",
        "descripcionDeducible": "3 UF",
        "primaTarifa": "24.0953",
        "totalImpuestos": "7.1199",
        "primaTotal": "44.5929",
        "importePrimerRecibo": "44.5929",
        "mensaje": "",
        "coberturas": [
          {
            "codigoCobertura": "1300",
            "nombreCobertura": "Daños Materiales",
            "capitalCob": "373.1002",
            "deducibleCob": "0.69673",
            "principalCob": "1",
            "primaTarifaCob": "18.8927",
            "primaNetaAnualAcob": "29.3821"
          },
          {
            "codigoCobertura": "1302",
            "nombreCobertura": "Robo, Hurto o Uso no Autorizado",
            "capitalCob": "373.1002",
            "deducibleCob": "0.69673",
            "principalCob": "0",
            "primaTarifaCob": "2.8734",
            "primaNetaAnualAcob": "4.4687"
          },
          {
            "codigoCobertura": "1303",
            "nombreCobertura": "Robo de Accesorios",
            "capitalCob": "55.965",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1304",
            "nombreCobertura": "Daños Materiales por Actos Maliciosos",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1306",
            "nombreCobertura": "Daños al Vehículo durante Viaje al Extranjero",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1000",
            "primaNetaAnualAcob": ".1555"
          },
          {
            "codigoCobertura": "1310",
            "nombreCobertura": "Taller Reale",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1313",
            "nombreCobertura": "RC Daño Emergente",
            "capitalCob": "1500",
            "deducibleCob": "0.69673",
            "principalCob": "1",
            "primaTarifaCob": ".9431",
            "primaNetaAnualAcob": "1.4667"
          },
          {
            "codigoCobertura": "1314",
            "nombreCobertura": "RC Daño Moral",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1179",
            "primaNetaAnualAcob": ".1833"
          },
          {
            "codigoCobertura": "1315",
            "nombreCobertura": "RC Lucro Cesante",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1179",
            "primaNetaAnualAcob": ".1833"
          },
          {
            "codigoCobertura": "1316",
            "nombreCobertura": "Daños a Terceros Causados por la Carga",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1318",
            "nombreCobertura": "Defensa Penal y Constitución de Fianzas",
            "capitalCob": "150",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1319",
            "nombreCobertura": "Asiento de Pasajero",
            "capitalCob": "450",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".1200",
            "primaNetaAnualAcob": ".1866"
          },
          {
            "codigoCobertura": "1321",
            "nombreCobertura": "Asistencia B",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".9303",
            "primaNetaAnualAcob": "1.4468"
          },
          {
            "codigoCobertura": "1374",
            "nombreCobertura": "Daños Materiales Causados por la Carga",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          }
        ],
        "psu": [
          {
            "descrip": "Edad Asegurado",
            "estado": "Autorizado",
            "rolPsu": "60"
          },
          {
            "descrip": "Retroactividad",
            "estado": "Autorizado",
            "rolPsu": "25"
          }
        ],
        "amparos": []
      },
      // {
      //   "numeroSimulacion": "3716777",
      //   "codigoActividad": "2",
      //   "descripcionActividad": "L Liviano Particular",
      //   "codigoDeducible": "3",
      //   "descripcionDeducible": "5 UF",
      //   "primaTarifa": "20.3644",
      //   "totalImpuestos": "6.0176",
      //   "primaTotal": "37.6885",
      //   "importePrimerRecibo": "37.6885",
      //   "mensaje": "",
      //   "coberturas": [
      //     {
      //       "codigoCobertura": "1300",
      //       "nombreCobertura": "Daños Materiales",
      //       "capitalCob": "373.1002",
      //       "deducibleCob": "0.58113",
      //       "principalCob": "1",
      //       "primaTarifaCob": "15.8208",
      //       "primaNetaAnualAcob": "24.6047"
      //     },
      //     {
      //       "codigoCobertura": "1302",
      //       "nombreCobertura": "Robo, Hurto o Uso no Autorizado",
      //       "capitalCob": "373.1002",
      //       "deducibleCob": "0.58113",
      //       "principalCob": "0",
      //       "primaTarifaCob": "2.4062",
      //       "primaNetaAnualAcob": "3.7421"
      //     },
      //     {
      //       "codigoCobertura": "1303",
      //       "nombreCobertura": "Robo de Accesorios",
      //       "capitalCob": "55.965",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0000",
      //       "primaNetaAnualAcob": ".0000"
      //     },
      //     {
      //       "codigoCobertura": "1304",
      //       "nombreCobertura": "Daños Materiales por Actos Maliciosos",
      //       "capitalCob": "373.1002",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0000",
      //       "primaNetaAnualAcob": ".0000"
      //     },
      //     {
      //       "codigoCobertura": "1306",
      //       "nombreCobertura": "Daños al Vehículo durante Viaje al Extranjero",
      //       "capitalCob": "373.1002",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".1000",
      //       "primaNetaAnualAcob": ".1555"
      //     },
      //     {
      //       "codigoCobertura": "1310",
      //       "nombreCobertura": "Taller Reale",
      //       "capitalCob": "0",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0000",
      //       "primaNetaAnualAcob": ".0000"
      //     },
      //     {
      //       "codigoCobertura": "1313",
      //       "nombreCobertura": "RC Daño Emergente",
      //       "capitalCob": "1500",
      //       "deducibleCob": "0.58113",
      //       "principalCob": "1",
      //       "primaTarifaCob": ".7897",
      //       "primaNetaAnualAcob": "1.2282"
      //     },
      //     {
      //       "codigoCobertura": "1314",
      //       "nombreCobertura": "RC Daño Moral",
      //       "capitalCob": "1500",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0987",
      //       "primaNetaAnualAcob": ".1535"
      //     },
      //     {
      //       "codigoCobertura": "1315",
      //       "nombreCobertura": "RC Lucro Cesante",
      //       "capitalCob": "1500",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0987",
      //       "primaNetaAnualAcob": ".1535"
      //     },
      //     {
      //       "codigoCobertura": "1316",
      //       "nombreCobertura": "Daños a Terceros Causados por la Carga",
      //       "capitalCob": "1500",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0000",
      //       "primaNetaAnualAcob": ".0000"
      //     },
      //     {
      //       "codigoCobertura": "1318",
      //       "nombreCobertura": "Defensa Penal y Constitución de Fianzas",
      //       "capitalCob": "150",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0000",
      //       "primaNetaAnualAcob": ".0000"
      //     },
      //     {
      //       "codigoCobertura": "1319",
      //       "nombreCobertura": "Asiento de Pasajero",
      //       "capitalCob": "450",
      //       "deducibleCob": "0",
      //       "principalCob": "1",
      //       "primaTarifaCob": ".1200",
      //       "primaNetaAnualAcob": ".1866"
      //     },
      //     {
      //       "codigoCobertura": "1321",
      //       "nombreCobertura": "Asistencia B",
      //       "capitalCob": "0",
      //       "deducibleCob": "0",
      //       "principalCob": "1",
      //       "primaTarifaCob": ".9303",
      //       "primaNetaAnualAcob": "1.4468"
      //     },
      //     {
      //       "codigoCobertura": "1374",
      //       "nombreCobertura": "Daños Materiales Causados por la Carga",
      //       "capitalCob": "373.1002",
      //       "deducibleCob": "0",
      //       "principalCob": "0",
      //       "primaTarifaCob": ".0000",
      //       "primaNetaAnualAcob": ".0000"
      //     }
      //   ],
      //   "psu": [
      //     {
      //       "descrip": "Edad Asegurado",
      //       "estado": "Autorizado",
      //       "rolPsu": "60"
      //     },
      //     {
      //       "descrip": "Retroactividad",
      //       "estado": "Autorizado",
      //       "rolPsu": "25"
      //     }
      //   ],
      //   "amparos": []
      // },
      {
        "numeroSimulacion": "3716782",
        "codigoActividad": "2",
        "descripcionActividad": "L Liviano Particular",
        "codigoDeducible": "4",
        "descripcionDeducible": "10 UF",
        "primaTarifa": "17.3681",
        "totalImpuestos": "5.1321",
        "primaTotal": "32.1431",
        "importePrimerRecibo": "32.1431",
        "mensaje": "",
        "coberturas": [
          {
            "codigoCobertura": "1300",
            "nombreCobertura": "Daños Materiales",
            "capitalCob": "373.1002",
            "deducibleCob": "0.48708",
            "principalCob": "1",
            "primaTarifaCob": "13.3130",
            "primaNetaAnualAcob": "20.7045"
          },
          {
            "codigoCobertura": "1302",
            "nombreCobertura": "Robo, Hurto o Uso no Autorizado",
            "capitalCob": "373.1002",
            "deducibleCob": "0.48708",
            "principalCob": "0",
            "primaTarifaCob": "2.0248",
            "primaNetaAnualAcob": "3.1489"
          },
          {
            "codigoCobertura": "1303",
            "nombreCobertura": "Robo de Accesorios",
            "capitalCob": "55.965",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1304",
            "nombreCobertura": "Daños Materiales por Actos Maliciosos",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1306",
            "nombreCobertura": "Daños al Vehículo durante Viaje al Extranjero",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1000",
            "primaNetaAnualAcob": ".1555"
          },
          {
            "codigoCobertura": "1310",
            "nombreCobertura": "Taller Reale",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1313",
            "nombreCobertura": "RC Daño Emergente",
            "capitalCob": "1500",
            "deducibleCob": "0.48708",
            "principalCob": "1",
            "primaTarifaCob": ".7040",
            "primaNetaAnualAcob": "1.0949"
          },
          {
            "codigoCobertura": "1314",
            "nombreCobertura": "RC Daño Moral",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0880",
            "primaNetaAnualAcob": ".1369"
          },
          {
            "codigoCobertura": "1315",
            "nombreCobertura": "RC Lucro Cesante",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0880",
            "primaNetaAnualAcob": ".1369"
          },
          {
            "codigoCobertura": "1316",
            "nombreCobertura": "Daños a Terceros Causados por la Carga",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1318",
            "nombreCobertura": "Defensa Penal y Constitución de Fianzas",
            "capitalCob": "150",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1319",
            "nombreCobertura": "Asiento de Pasajero",
            "capitalCob": "450",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".1200",
            "primaNetaAnualAcob": ".1866"
          },
          {
            "codigoCobertura": "1321",
            "nombreCobertura": "Asistencia B",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".9303",
            "primaNetaAnualAcob": "1.4468"
          },
          {
            "codigoCobertura": "1374",
            "nombreCobertura": "Daños Materiales Causados por la Carga",
            "capitalCob": "373.1002",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          }
        ],
        "psu": [
          {
            "descrip": "Edad Asegurado",
            "estado": "Autorizado",
            "rolPsu": "60"
          },
          {
            "descrip": "Retroactividad",
            "estado": "Autorizado",
            "rolPsu": "25"
          }
        ],
        "amparos": []
      }
    ]
  }

  responsePesados: any = {
    "succes": true,
    "exceptionCanonicalName": null,
    "error": null,
    "simulaciones": [
      {
        "numeroSimulacion": "5861030",
        "codigoActividad": "8",
        "descripcionActividad": "L Pesado",
        "codigoDeducible": "1",
        "descripcionDeducible": "0 UF",
        "primaTarifa": "35.0411",
        "totalImpuestos": "8.6577",
        "primaTotal": "54.2247",
        "importePrimerRecibo": "54.2247",
        "mensaje": "",
        "coberturas": [
          {
            "codigoCobertura": "1300",
            "nombreCobertura": "Daños Materiales",
            "capitalCob": "1220",
            "deducibleCob": "1.35",
            "principalCob": "1",
            "primaTarifaCob": "18.1496",
            "primaNetaAnualAcob": "23.6016"
          },
          {
            "codigoCobertura": "1302",
            "nombreCobertura": "Robo, Hurto o Uso no Autorizado",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": "2.7110",
            "primaNetaAnualAcob": "3.5254"
          },
          {
            "codigoCobertura": "1303",
            "nombreCobertura": "Robo de Accesorios",
            "capitalCob": "80",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1304",
            "nombreCobertura": "Daños Materiales por Actos Maliciosos",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1305",
            "nombreCobertura": "Daños Materiales por Conductores Dependientes",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".6000",
            "primaNetaAnualAcob": ".7802"
          },
          {
            "codigoCobertura": "1306",
            "nombreCobertura": "Daños al Vehículo durante Viaje al Extranjero",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".8000",
            "primaNetaAnualAcob": "1.0403"
          },
          {
            "codigoCobertura": "1310",
            "nombreCobertura": "Taller Reale",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1313",
            "nombreCobertura": "RC Daño Emergente",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.3680",
            "primaNetaAnualAcob": "1.7789"
          },
          {
            "codigoCobertura": "1314",
            "nombreCobertura": "RC Daño Moral",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1710",
            "primaNetaAnualAcob": ".2224"
          },
          {
            "codigoCobertura": "1315",
            "nombreCobertura": "RC Lucro Cesante",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1710",
            "primaNetaAnualAcob": ".2224"
          },
          {
            "codigoCobertura": "1316",
            "nombreCobertura": "Daños a Terceros Causados por la Carga",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".8000",
            "primaNetaAnualAcob": "1.0403"
          },
          {
            "codigoCobertura": "1317",
            "nombreCobertura": "Daños a Terceros por Conductores Dependientes",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".6000",
            "primaNetaAnualAcob": ".7802"
          },
          {
            "codigoCobertura": "1318",
            "nombreCobertura": "Defensa Penal y Constitución de Fianzas",
            "capitalCob": "150",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1319",
            "nombreCobertura": "Asiento de Pasajero",
            "capitalCob": "450",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".2000",
            "primaNetaAnualAcob": ".2601"
          },
          {
            "codigoCobertura": "1327",
            "nombreCobertura": "Asistencia A Pesados",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".8705",
            "primaNetaAnualAcob": "1.1320"
          },
          {
            "codigoCobertura": "1666",
            "nombreCobertura": "RC en Exceso",
            "capitalCob": "1000",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.0000",
            "primaNetaAnualAcob": "1.3004"
          },
          {
            "codigoCobertura": "1374",
            "nombreCobertura": "Daños Materiales Causados por la Carga",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1464",
            "nombreCobertura": "Cobertura Caminos Privados",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1465",
            "nombreCobertura": "Cobertura de Carga y Descarga",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1466",
            "nombreCobertura": "Cláusula de Trabajo en Faena",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1467",
            "nombreCobertura": "Traslado del vehículo",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          }
        ],
        "psu": [],
        "amparos": []
      },
      {
        "numeroSimulacion": "5861029",
        "codigoActividad": "8",
        "descripcionActividad": "L Pesado",
        "codigoDeducible": "2",
        "descripcionDeducible": "5 UF",
        "primaTarifa": "32.4109",
        "totalImpuestos": "8.0078",
        "primaTotal": "50.1544",
        "importePrimerRecibo": "50.1544",
        "mensaje": "",
        "coberturas": [
          {
            "codigoCobertura": "1300",
            "nombreCobertura": "Daños Materiales",
            "capitalCob": "1220",
            "deducibleCob": "1.12",
            "principalCob": "1",
            "primaTarifaCob": "15.5194",
            "primaNetaAnualAcob": "20.1812"
          },
          {
            "codigoCobertura": "1302",
            "nombreCobertura": "Robo, Hurto o Uso no Autorizado",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": "2.7110",
            "primaNetaAnualAcob": "3.5254"
          },
          {
            "codigoCobertura": "1303",
            "nombreCobertura": "Robo de Accesorios",
            "capitalCob": "80",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1304",
            "nombreCobertura": "Daños Materiales por Actos Maliciosos",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1305",
            "nombreCobertura": "Daños Materiales por Conductores Dependientes",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".6000",
            "primaNetaAnualAcob": ".7802"
          },
          {
            "codigoCobertura": "1306",
            "nombreCobertura": "Daños al Vehículo durante Viaje al Extranjero",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".8000",
            "primaNetaAnualAcob": "1.0403"
          },
          {
            "codigoCobertura": "1310",
            "nombreCobertura": "Taller Reale",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1313",
            "nombreCobertura": "RC Daño Emergente",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.3680",
            "primaNetaAnualAcob": "1.7789"
          },
          {
            "codigoCobertura": "1314",
            "nombreCobertura": "RC Daño Moral",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1710",
            "primaNetaAnualAcob": ".2224"
          },
          {
            "codigoCobertura": "1315",
            "nombreCobertura": "RC Lucro Cesante",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1710",
            "primaNetaAnualAcob": ".2224"
          },
          {
            "codigoCobertura": "1316",
            "nombreCobertura": "Daños a Terceros Causados por la Carga",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".8000",
            "primaNetaAnualAcob": "1.0403"
          },
          {
            "codigoCobertura": "1317",
            "nombreCobertura": "Daños a Terceros por Conductores Dependientes",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".6000",
            "primaNetaAnualAcob": ".7802"
          },
          {
            "codigoCobertura": "1318",
            "nombreCobertura": "Defensa Penal y Constitución de Fianzas",
            "capitalCob": "150",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1319",
            "nombreCobertura": "Asiento de Pasajero",
            "capitalCob": "450",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".2000",
            "primaNetaAnualAcob": ".2601"
          },
          {
            "codigoCobertura": "1327",
            "nombreCobertura": "Asistencia A Pesados",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".8705",
            "primaNetaAnualAcob": "1.1320"
          },
          {
            "codigoCobertura": "1666",
            "nombreCobertura": "RC en Exceso",
            "capitalCob": "1000",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.0000",
            "primaNetaAnualAcob": "1.3004"
          },
          {
            "codigoCobertura": "1374",
            "nombreCobertura": "Daños Materiales Causados por la Carga",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1464",
            "nombreCobertura": "Cobertura Caminos Privados",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1465",
            "nombreCobertura": "Cobertura de Carga y Descarga",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1466",
            "nombreCobertura": "Cláusula de Trabajo en Faena",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1467",
            "nombreCobertura": "Traslado del vehículo",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          }
        ],
        "psu": [],
        "amparos": []
      },
      {
        "numeroSimulacion": "5861028",
        "codigoActividad": "8",
        "descripcionActividad": "L Pesado",
        "codigoDeducible": "4",
        "descripcionDeducible": "20 UF",
        "primaTarifa": "29.5862",
        "totalImpuestos": "7.3099",
        "primaTotal": "45.7833",
        "importePrimerRecibo": "45.7833",
        "mensaje": "",
        "coberturas": [
          {
            "codigoCobertura": "1300",
            "nombreCobertura": "Daños Materiales",
            "capitalCob": "1220",
            "deducibleCob": "0.873",
            "principalCob": "1",
            "primaTarifaCob": "12.6947",
            "primaNetaAnualAcob": "16.5080"
          },
          {
            "codigoCobertura": "1302",
            "nombreCobertura": "Robo, Hurto o Uso no Autorizado",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": "2.7110",
            "primaNetaAnualAcob": "3.5254"
          },
          {
            "codigoCobertura": "1303",
            "nombreCobertura": "Robo de Accesorios",
            "capitalCob": "80",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1304",
            "nombreCobertura": "Daños Materiales por Actos Maliciosos",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1305",
            "nombreCobertura": "Daños Materiales por Conductores Dependientes",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".6000",
            "primaNetaAnualAcob": ".7802"
          },
          {
            "codigoCobertura": "1306",
            "nombreCobertura": "Daños al Vehículo durante Viaje al Extranjero",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".8000",
            "primaNetaAnualAcob": "1.0403"
          },
          {
            "codigoCobertura": "1310",
            "nombreCobertura": "Taller Reale",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1313",
            "nombreCobertura": "RC Daño Emergente",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.3680",
            "primaNetaAnualAcob": "1.7789"
          },
          {
            "codigoCobertura": "1314",
            "nombreCobertura": "RC Daño Moral",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1710",
            "primaNetaAnualAcob": ".2224"
          },
          {
            "codigoCobertura": "1315",
            "nombreCobertura": "RC Lucro Cesante",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1710",
            "primaNetaAnualAcob": ".2224"
          },
          {
            "codigoCobertura": "1316",
            "nombreCobertura": "Daños a Terceros Causados por la Carga",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".8000",
            "primaNetaAnualAcob": "1.0403"
          },
          {
            "codigoCobertura": "1317",
            "nombreCobertura": "Daños a Terceros por Conductores Dependientes",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".6000",
            "primaNetaAnualAcob": ".7802"
          },
          {
            "codigoCobertura": "1318",
            "nombreCobertura": "Defensa Penal y Constitución de Fianzas",
            "capitalCob": "150",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1319",
            "nombreCobertura": "Asiento de Pasajero",
            "capitalCob": "450",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".2000",
            "primaNetaAnualAcob": ".2601"
          },
          {
            "codigoCobertura": "1327",
            "nombreCobertura": "Asistencia A Pesados",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".8705",
            "primaNetaAnualAcob": "1.1320"
          },
          {
            "codigoCobertura": "1666",
            "nombreCobertura": "RC en Exceso",
            "capitalCob": "1000",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.0000",
            "primaNetaAnualAcob": "1.3004"
          },
          {
            "codigoCobertura": "1374",
            "nombreCobertura": "Daños Materiales Causados por la Carga",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1464",
            "nombreCobertura": "Cobertura Caminos Privados",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1465",
            "nombreCobertura": "Cobertura de Carga y Descarga",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1466",
            "nombreCobertura": "Cláusula de Trabajo en Faena",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1467",
            "nombreCobertura": "Traslado del vehículo",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          }
        ],
        "psu": [],
        "amparos": []
      },
      {
        "numeroSimulacion": "5861031",
        "codigoActividad": "8",
        "descripcionActividad": "L Pesado",
        "codigoDeducible": "6",
        "descripcionDeducible": "40 UF",
        "primaTarifa": "26.6357",
        "totalImpuestos": "6.5809",
        "primaTotal": "41.2175",
        "importePrimerRecibo": "41.2175",
        "mensaje": "",
        "coberturas": [
          {
            "codigoCobertura": "1300",
            "nombreCobertura": "Daños Materiales",
            "capitalCob": "1220",
            "deducibleCob": "0.615",
            "principalCob": "1",
            "primaTarifaCob": "9.7442",
            "primaNetaAnualAcob": "12.6712"
          },
          {
            "codigoCobertura": "1302",
            "nombreCobertura": "Robo, Hurto o Uso no Autorizado",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": "2.7110",
            "primaNetaAnualAcob": "3.5254"
          },
          {
            "codigoCobertura": "1303",
            "nombreCobertura": "Robo de Accesorios",
            "capitalCob": "80",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1304",
            "nombreCobertura": "Daños Materiales por Actos Maliciosos",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1305",
            "nombreCobertura": "Daños Materiales por Conductores Dependientes",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".6000",
            "primaNetaAnualAcob": ".7802"
          },
          {
            "codigoCobertura": "1306",
            "nombreCobertura": "Daños al Vehículo durante Viaje al Extranjero",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".8000",
            "primaNetaAnualAcob": "1.0403"
          },
          {
            "codigoCobertura": "1310",
            "nombreCobertura": "Taller Reale",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1313",
            "nombreCobertura": "RC Daño Emergente",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.3680",
            "primaNetaAnualAcob": "1.7789"
          },
          {
            "codigoCobertura": "1314",
            "nombreCobertura": "RC Daño Moral",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1710",
            "primaNetaAnualAcob": ".2224"
          },
          {
            "codigoCobertura": "1315",
            "nombreCobertura": "RC Lucro Cesante",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1710",
            "primaNetaAnualAcob": ".2224"
          },
          {
            "codigoCobertura": "1316",
            "nombreCobertura": "Daños a Terceros Causados por la Carga",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".8000",
            "primaNetaAnualAcob": "1.0403"
          },
          {
            "codigoCobertura": "1317",
            "nombreCobertura": "Daños a Terceros por Conductores Dependientes",
            "capitalCob": "1500",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".6000",
            "primaNetaAnualAcob": ".7802"
          },
          {
            "codigoCobertura": "1318",
            "nombreCobertura": "Defensa Penal y Constitución de Fianzas",
            "capitalCob": "150",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1319",
            "nombreCobertura": "Asiento de Pasajero",
            "capitalCob": "450",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".2000",
            "primaNetaAnualAcob": ".2601"
          },
          {
            "codigoCobertura": "1327",
            "nombreCobertura": "Asistencia A Pesados",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".8705",
            "primaNetaAnualAcob": "1.1320"
          },
          {
            "codigoCobertura": "1666",
            "nombreCobertura": "RC en Exceso",
            "capitalCob": "1000",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.0000",
            "primaNetaAnualAcob": "1.3004"
          },
          {
            "codigoCobertura": "1374",
            "nombreCobertura": "Daños Materiales Causados por la Carga",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1464",
            "nombreCobertura": "Cobertura Caminos Privados",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1465",
            "nombreCobertura": "Cobertura de Carga y Descarga",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1466",
            "nombreCobertura": "Cláusula de Trabajo en Faena",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1467",
            "nombreCobertura": "Traslado del vehículo",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          }
        ],
        "psu": [],
        "amparos": []
      },
      {
        "numeroSimulacion": "5861032",
        "codigoActividad": "9",
        "descripcionActividad": "M Pesado",
        "codigoDeducible": "1",
        "descripcionDeducible": "0 UF",
        "primaTarifa": "19.0445",
        "totalImpuestos": "4.7052",
        "primaTotal": "29.4703",
        "importePrimerRecibo": "29.4703",
        "mensaje": "",
        "coberturas": [
          {
            "codigoCobertura": "1301",
            "nombreCobertura": "Perdida Total",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "2.7110",
            "primaNetaAnualAcob": "3.5254"
          },
          {
            "codigoCobertura": "1302",
            "nombreCobertura": "Robo, Hurto o Uso no Autorizado",
            "capitalCob": "1220",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": "2.7110",
            "primaNetaAnualAcob": "3.5254"
          },
          {
            "codigoCobertura": "1307",
            "nombreCobertura": "Perdida Total por Actos Maliciosos",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1308",
            "nombreCobertura": "Perdida Total durante Viaje al Extranjero",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".8000",
            "primaNetaAnualAcob": "1.0403"
          },
          {
            "codigoCobertura": "1309",
            "nombreCobertura": "Perdida Total por Conductores Dependientes",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".4500",
            "primaNetaAnualAcob": ".5852"
          },
          {
            "codigoCobertura": "1313",
            "nombreCobertura": "RC Daño Emergente",
            "capitalCob": "1000",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.1856",
            "primaNetaAnualAcob": "1.5417"
          },
          {
            "codigoCobertura": "1314",
            "nombreCobertura": "RC Daño Moral",
            "capitalCob": "1000",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1482",
            "primaNetaAnualAcob": ".1927"
          },
          {
            "codigoCobertura": "1315",
            "nombreCobertura": "RC Lucro Cesante",
            "capitalCob": "1000",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".1482",
            "primaNetaAnualAcob": ".1927"
          },
          {
            "codigoCobertura": "1316",
            "nombreCobertura": "Daños a Terceros Causados por la Carga",
            "capitalCob": "1000",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".8000",
            "primaNetaAnualAcob": "1.0403"
          },
          {
            "codigoCobertura": "1317",
            "nombreCobertura": "Daños a Terceros por Conductores Dependientes",
            "capitalCob": "1000",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".5000",
            "primaNetaAnualAcob": ".6502"
          },
          {
            "codigoCobertura": "1318",
            "nombreCobertura": "Defensa Penal y Constitución de Fianzas",
            "capitalCob": "100",
            "deducibleCob": "0",
            "principalCob": "0",
            "primaTarifaCob": ".0000",
            "primaNetaAnualAcob": ".0000"
          },
          {
            "codigoCobertura": "1319",
            "nombreCobertura": "Asiento de Pasajero",
            "capitalCob": "400",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".1200",
            "primaNetaAnualAcob": ".1560"
          },
          {
            "codigoCobertura": "1327",
            "nombreCobertura": "Asistencia A Pesados",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": ".8705",
            "primaNetaAnualAcob": "1.1320"
          },
          {
            "codigoCobertura": "1666",
            "nombreCobertura": "RC en Exceso",
            "capitalCob": "1000",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.0000",
            "primaNetaAnualAcob": "1.3004"
          },
          {
            "codigoCobertura": "1464",
            "nombreCobertura": "Cobertura Caminos Privados",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1465",
            "nombreCobertura": "Cobertura de Carga y Descarga",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1466",
            "nombreCobertura": "Cláusula de Trabajo en Faena",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          },
          {
            "codigoCobertura": "1467",
            "nombreCobertura": "Traslado del vehículo",
            "capitalCob": "0",
            "deducibleCob": "0",
            "principalCob": "1",
            "primaTarifaCob": "1.9000",
            "primaNetaAnualAcob": "2.4707"
          }
        ],
        "psu": [],
        "amparos": []
      }
    ]
  }



  constructor(private http: HttpClient) { 
    console.log('Tarificador Listo')
  }

  tarificarLivianos() {
    let tarifas;

    tarifas = this.doTarificarLivianos();

    // return this.doTarificar().subscribe(simulaciones => {
    //   console.log(simulaciones);
    //   tarifas = simulaciones;
    //   //this.loadingArtist = false;
    // });

    //console.log(tarifas)
    return tarifas;
  }

  doTarificarLivianos() {

    return this.responseLivianos.simulaciones;

      // return this.http.post(this.url, this.request, this.httpOptions).pipe(
    //   map(data => data["simulaciones"]));
  }

  tarificarPesados() {
    let tarifas;

    tarifas = this.doTarificarPesados();

    // return this.doTarificar().subscribe(simulaciones => {
    //   console.log(simulaciones);
    //   tarifas = simulaciones;
    //   //this.loadingArtist = false;
    // });

    //console.log(tarifas)
    return tarifas;
  }

  doTarificarPesados() {

    return this.responsePesados.simulaciones;

      // return this.http.post(this.url, this.request, this.httpOptions).pipe(
    //   map(data => data["simulaciones"]));
  }

  tarificarHogar(): any[] | PromiseLike<any[]> {
    throw new Error("Method not implemented.");
  }
  tarificarMotos(): any[] | PromiseLike<any[]> {
    throw new Error("Method not implemented.");
  }

}
