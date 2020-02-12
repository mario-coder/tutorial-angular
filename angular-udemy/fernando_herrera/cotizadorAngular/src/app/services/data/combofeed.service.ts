import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComboFeedService {

  constructor() { }

  getComunas():any[] {
    return [
      {code: "1", label: "CERRILLOS"},
      {code: "1", label: "ESTACION CENTRAL"},
      {code: "1", label: "HUECHURABA"},
      {code: "1", label: "INDEPENDENCIA"},
      {code: "1", label: "LA CISTERNA"},
      {code: "1", label: "LA REINA"},
      {code: "1", label: "LAS CONDES"},
      {code: "1", label: "MAIPU"},
      {code: "1", label: "ÑUÑOA"},
      {code: "2", label: "PEÑALOLEN"},
      {code: "2", label: "PROVIDENCIA"},
      {code: "2", label: "RENCA"},
      {code: "2", label: "SANTIAGO"},
      {code: "2", label: "VITACURA"}
    ]
  }

  getTalleres():any[] {
    return [
      {code: "1", label: "TALLER REALE"},
      {code: "2", label: "TALLER MARCA"}
    ]
  }

  getAsistencias():any[] {
    return [
      {code: "1", label: "A"},
      {code: "2", label: "B"},
      {code: "2", label: "PLUS"}
    ]
  }

  getRcsEnExceso(): any[] {
    return [
      {code: "1", label: "UF 1.000"},
      {code: "2", label: "UF 2.000"},
      {code: "3", label: "UF 3.000"},
      {code: "4", label: "UF 4.000"},
      {code: "5", label: "UF 5.000"}
    ]
  }

  getCompaniasAnteriores(): any[] {
    return [
      {code: "1", label: "HDI"},
      {code: "2", label: "Mapfre"}
    ]
  }

  getModelos():any[] {
    return [
      {code: "1", label: "Aveo"},
      {code: "2", label: "Blazer"},
      {code: "2", label: "Camaro"},
      {code: "2", label: "Captiva"},
      {code: "2", label: "Cavalier"},
      {code: "2", label: "Equinox"},
      {code: "2", label: "Sail"},
      {code: "2", label: "Spark"},
      {code: "2", label: "Traverse"}
    ]
  }

  getMarcas():any[] {
    return [
      {code: "1", label: "Audi"},
      {code: "1", label: "BMW"},
      {code: "1", label: "Chery"},
      {code: "1", label: "Chevrolet"},
      {code: "1", label: "Fiat"},
      {code: "2", label: "Ford"},
      {code: "2", label: "Honda"},
      {code: "2", label: "Jeep"},
      {code: "2", label: "Mazda"},
      {code: "2", label: "Mitsubishi"},
      {code: "2", label: "Peugeot"},
      {code: "2", label: "Volvo"}
    ]
  }

  getAnios():any[] {
    return [
      {code: "1", label: "2020"},
      {code: "2", label: "2019"}
    ]
  }

  getEstadosVehiculo():any[] {
    return [
      {code: "1", label: "NUEVO"},
      {code: "2", label: "USADO"}
    ]
  }

  getTiposDocumento():any[] {
    return [
      {code: "1", label: "PERSONA NATURAL"},
      {code: "2", label: "PERSONA JURIDICA"}
    ]
  }

  getTiposPersona(): any[] {
    return [
      {code: "1", label: "Asegurado"},
      {code: "2", label: "Contratante"},
      {code: "3", label: "Beneficiario"},
    ]
  }

  getFormasDePago():any[] {
    return [
      {code: "1", label: "PAC"},
      {code: "2", label: "PAT"},
      {code: "3", label: "PAGO DIRECTO"},
    ]
  }

  getMediosNotificacion():any[] {
    return [
      {code: "1", label: "EMAIL"},
      {code: "2", label: "TELEFONO"},
    ]
  }

  getRespuestasSiNo():any[] {
    return [
      {code: "2", label: "NO"},
      {code: "1", label: "SI"},
    ]
  }

  getTiposTarjeta():any[] {
    return [
      {code: "1", label: "VISA"},
      {code: "2", label: "MASTERCARD"},
    ]
  }

  getTiposCuenta():any[] {
    return [
      {code: "1", label: "CORRIENTE"},
      {code: "2", label: "VISTA"},
    ]
  }

  getBancos():any[] {
    return [
      {code: "1", label: "BCI"},
      {code: "2", label: "BICE"},
      {code: "3", label: "CHILE"},
      {code: "4", label: "Santander"},
      {code: "5", label: "Scotiabank"}
    ]
  }

  getNumeroCuotas():any[] {
    return [
      {code: "1", label: "1"},
      {code: "2", label: "2"},
      {code: "3", label: "3"},
      {code: "4", label: "4"},
      {code: "5", label: "5"}
    ]
  }

  getModalidadesIngreso():any[] {
    return [
      {code: "1", label: "FACTURA"},
      {code: "2", label: "INSPECCION"},
    ]
  }

  getDiasDePago():any[] {
    return [
      {label: "5", code: "5"},
      {label: "20", code: "20"}
    ]
  }

  getSucursales():any[] {
    return [
      {code: "1", label: "TODOS(AS)"},
      {code: "2", label: "ALONSO DE CORDOVA"},
      {code: "3", label: "LA SERENA"},
      {code: "4", label: "SANTIAGO CENTRO"}
    ]
  }

  getTiposConsulta(): any[] {
    return [
      {code: "1", label: "GENERAL"}
    ]
  }
  
  getCanales(): any[] {
    return [
      {code: "0", label: "TODOS(AS)"},
      {code: "1", label: "CORREDORES"},
    ]
  }
  
  getCorredores(): any[] {
    return [
      {code: "0", label: "TODOS(AS)"},
      {code: "1", label: "A y B Corredores de seguros"},
      {code: "2", label: "Actualrial"}
    ]
  }
  
  getCompanias(): any[] {
    return [
      {code: "0", label: "TODOS(AS)"},
      {code: "0", label: "REALE"}
    ]
  }
  
  getRamos(): any[] {
    return [
      {code: "0", label: "TODOS(AS)"},
      {code: "1", label: "Accidentes Personales"},
      {code: "2", label: "Auto"},
      {code: "3", label: "Hogar"},
      {code: "4", label: "SOAP"},
      {code: "5", label: "Vida"}
    ]
  }

  getPeriodos(): any[] {
    return [
      {code: "0", label: "REGISTRO"}
    ]
  }
  
  getEstadosSimulacion(): any[] {
    return [
      {code: "1", label: "VIGENTE"},
      {code: "2", label: "RECHAZADA"},
    ]
  }
  
  getTiposVehiculo(): any[] {
    return [
      {code: "1", label: "AUTOMOVIL"},
      {code: "2", label: "CAMIONETA"},
      {code: "3", label: "FURGON"},
      {code: "4", label: "MINIBUS"},
      {code: "5", label: "MOTO"},
      {code: "6", label: "STATION-WAG"},
      {code: "7", label: "TODO TERRENO"}
    ]
  }
  
  getUsosVehiculo(): any[] {
    return [
      {code: "1", label: "PARTICULAR"},
      {code: "2", label: "COMERCIAL"}
    ]
  }
  
  getSubUsosVehiculo(): any[] {
    return [
      {code: "1", label: "DIARIO"},
      {code: "2", label: "FINES DE SEMANA"},
      {code: "3", label: "VACACIONAL"},
    ]
  }
  
  getPerfilesAsegurado(): any[] {
    return [
      {code: "1", label: "Propietario"},
      {code: "2", label: "Arrendatario"},
    ]
  }
  
  getOcupacionesHabitacionales(): any[] {
    return [
      {code: "1", label: "Casa Ocupacion Habitacional"},
      {code: "2", label: "Casa Ocupacion Temporal"},
    ]
  }
  
  getTiposConstruccion(): any[] {
    return [
      {code: "1", label: "Solida"},
      {code: "2", label: "Ligero Combustible"}
    ]
  }
  
  getZonas(): any[] {
    return [
      {code: "1", label: "Rural"},
      {code: "2", label: "Urbana"}
    ]
  }
  
  getRegiones(): any[] {
    return [
      {code: "", label: "Antofagasta"},
      {code: "", label: "La Serena"},
      {code: "", label: "Metropolitana"}
    ]
  }  

  getTiposOperacion(): any {
    return [
      {code: "1", label: "Simulacion"},
      {code: "2", label: "Propuesta"}
    ]
  }

  getOpcionesDescuentoRecargo(): any[] {
    return [
      {code: "1", label: "DESCUENTO"},
      {code: "2", label: "RECARGO"}
    ];
  }

  getAccesorios(): any[] {
    return [
      {code: "1", label: "AIRBAGS"},
      {code: "2", label: "AIRE ACONDICIONADO"}
    ];
  }

  getPiezasPreexistencias(): any[] {
    return [
      {code: "2", label: "ACOLCHADO DE TABLEROS"},
      {code: "1", label: "AIRBAGS"}
    ];
  }

  getNivelesGravedad(): any[] {
    return [
      {code: "1", label: "LEVE"},
      {code: "2", label: "MEDIANO"},
      {code: "3", label: "GRAVE"}
    ];
  }

/**********/
/*PESADOS*/
/********/
  getTiposVehiculosPesados(): any[] {
    return [
      {code: "1", label: "BUS"},
      {code: "2", label: "CAMION"},
      {code: "3", label: "MINIBUS"},
      {code: "4", label: "REMOLQUE"},
      {code: "5", label: "SEMIRREMOLQUE"},
      {code: "6", label: "TRACTO CAMION"}
    ]
  }

  getUsosVehiculosPesados(): any[] {
    return [
      {code: "2", label: "COMERCIAL"}
    ]
  }

  getSubUsosCamion(): any[] {
    return [
      {code: "1",  label: "TRANSPORTE CARGA FORESTAL"},
      {code: "2",  label: "TRANSPORTE MATERIALES PARA LA MINERÍA"},
      {code: "3",  label: "TRANSPORTE HORMIGÓN Y MATERIALES DE CONSTRUCCIÓN"},
      {code: "4",  label: "TRANSPORTE DE ANIMALES VIVOS"},
      {code: "5",  label: "TRANSPORTE DE CONTENEDORES"},
      {code: "6",  label: "TRANSPORTE DE ESCOMBROS"},
      {code: "7",  label: "TRANSPORTE DE ALIMENTOS NO REFRIGERADOS"},
      {code: "8",  label: "TRANSPORTE DE ALIMENTOS REFRIGERADOS"},
      {code: "9",  label: "TRANSPORTE DE VEHÍCULOS Y MAQUINARIAS"},
      {code: "10", label: "OTROS (EXCLUYE TTE. PÚB. DE PASAJEROS, TTE. COMB. Y TTE. CARGAS PELIGROSAS, EXPL. Y/O CORROSIVAS)"}
    ]
  }

  getClausulasAdicionalesPesados(): any[] {
    return [
      {code: "1", label: "COBERTURA CAMINOS PRIVADO"},
      {code: "2", label: "COBERTURA DE CARGA Y DESCARGA"},
      {code: "3", label: "COBERTURA DE TRABAJO EN FAENA"},
      {code: "4", label: "COBERTURA TRASLADO DEL VEHÍCULO"}
    ]
  }

/********/
/*MOTOS*/
/******/
  getClasificacionesMotos(): any[] {
    return [
      {code: "1", label: "MOTO URBANA"},
      {code: "2", label: "MOTO TRIMOTO"},
      {code: "3", label: "MOTO TOURING"},
      {code: "4", label: "MOTO ENDURO"},
      {code: "5", label: "MOTO DEPORTIVA"},
      {code: "6", label: "MOTO CUATRIMOTO"},
      {code: "7", label: "MOTO 4X4"}
    ]
  }

  getCilindradasMotos(): any[] {
    return [
      {code: "1", label: "1000"},
      {code: "2", label: "2000"}
    ]
  }

  getUsosMotos(): any {
    return [
      {code: "1", label: "PARTICULAR"}
    ]
  }

/********/
/*HOGAR*/
/******/
  getZonasHogar(): any[] {
    return [
      {code: "1", label: "Urbana"},
      {code: "2", label: "Rural"}
    ]
  }

  getTiposViasHogar(): any[] {
    return [
      {code: "1", label: "Autopista"},
      {code: "2", label: "Avenida"},
      {code: "3", label: "Calle"},
      {code: "4", label: "Carretera"},
      {code: "5", label: "Pasaje"},
      {code: "6", label: "Paseo"},
    ]
  }

  getOcupacionesRiesgoHogar(): any[] {
    return [
      {code: "1", label: "Casa Ocupacion Habitual"},
      {code: "2", label: "Casa Ocupacion Temporal"},
      {code: "3", label: "Departamente Ocupacion Habitual"},
      {code: "4", label: "Departamento Ocupacion Temporal"},
    ]
  }

  getTiposConstruccionHogar(): any[] {
    return [
      {code: "1", label: "Sólida"},
      {code: "2", label: "Ligero Combustible"},
      {code: "3", label: "Ligero No Combustible"},
      {code: "4", label: "Adoble y/o Adobillo"},
      {code: "5", label: "Mixto Sólido/Ligero"},
    ]
  }
}
