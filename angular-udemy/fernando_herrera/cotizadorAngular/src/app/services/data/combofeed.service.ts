import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComboFeedService {

  constructor() { }

  getComunas():any[] {
    return [
      { label: "CERRILLOS", code: "1" },
      { label: "ESTACION CENTRAL", code: "1" },
      { label: "HUECHURABA", code: "1" },
      { label: "INDEPENDENCIA", code: "1" },
      { label: "LA CISTERNA", code: "1" },
      { label: "LA REINA", code: "1" },
      { label: "LAS CONDES", code: "1" },
      { label: "MAIPU", code: "1" },
      { label: "ÑUÑOA", code: "1" },
      { label: "PEÑALOLEN", code: "2" },
      { label: "PROVIDENCIA", code: "2" },
      { label: "RENCA", code: "2" },
      { label: "SANTIAGO", code: "2" },
      { label: "VITACURA", code: "2" },
    ]
  }

  getTalleres():any[] {
    return [
      { label: "TALLER REALE", code: "1" },
      { label: "TALLER MARCA", code: "2" }
    ]
  }

  getAsistencias():any[] {
    return [
      { label: "A", code: "1" },
      { label: "B", code: "2" },
      { label: "PLUS", code: "2" }
    ]
  }

  getRcsEnExceso(): any[] {
    return [
      { label: "UF 1.000", code: "1" },
      { label: "UF 2.000", code: "2" },
      { label: "UF 3.000", code: "3" },
      { label: "UF 4.000", code: "4" },
      { label: "UF 5.000", code: "5" }
    ]
  }

  getCompaniasAnteriores(): any[] {
    return [
      { label: "HDI", code: "1" },
      { label: "Mapfre", code: "2" }
    ]
  }

  getModelos():any[] {
    return [
      { label: "Aveo", code: "1" },
      { label: "Blazer", code: "2" },
      { label: "Camaro", code: "2" },
      { label: "Captiva", code: "2" },
      { label: "Cavalier", code: "2" },
      { label: "Equinox", code: "2" },
      { label: "Sail", code: "2" },
      { label: "Spark", code: "2" },
      { label: "Traverse", code: "2" }
    ]
  }

  getMarcas():any[] {
    return [
      { label: "Audi", code: "1" },
      { label: "BMW", code: "1" },
      { label: "Chery", code: "1" },
      { label: "Chevrolet", code: "1" },
      { label: "Fiat", code: "1" },
      { label: "Ford", code: "2" },
      { label: "Honda", code: "2" },
      { label: "Jeep", code: "2" },
      { label: "Mazda", code: "2" },
      { label: "Mitsubishi", code: "2" },
      { label: "Peugeot", code: "2" },
      { label: "Volvo", code: "2" }
    ]
  }

  getAnios():any[] {
    return [
      { label: "2020", code: "1" },
      { label: "2019", code: "2" }
    ]
  }

  getEstadosVehiculo():any[] {
    return [
      { label: "NUEVO", code: "1" },
      { label: "USADO", code: "2" }
    ]
  }

  getTiposDocumento():any[] {
    return [
      { label: "PERSONA NATURAL", code: "1" },
      { label: "PERSONA JURIDICA", code: "2" }
    ]
  }

  getTiposPersona(): any[] {
    return [
      {label: "Asegurado", code: "1"}, 
      {label: "Contratante", code: "2"}, 
      {label: "Beneficiario", code: "3"}
    ]
  }

  getFormasDePago():any[] {
    return [
      {label: "PAC", code: "1"}, 
      {label: "PAT", code: "2"}, 
      {label: "PAGO DIRECTO", code: "3"}
    ]
  }

  getMediosNotificacion():any[] {
    return [
      {label: "EMAIL", code: "1"},
      {label: "TELEFONO", code: "2"}
    ]
  }

  getRespuestasSiNo():any[] {
    return [
      {label: "NO", code: "2"},
      {label: "SI", code: "1"}
    ]
  }

  getTiposTarjeta():any[] {
    return [
      {label: "VISA", code: "1"},
      {label: "MASTERCARD", code: "2"}
    ]
  }

  getTiposCuenta():any[] {
    return [
      {label: "CORRIENTE", code: "1"},
      {label: "VISTA", code: "2"}
    ]
  }

  getBancos():any[] {
    return [
      {label: "BCI", code: "1" },
      {label: "BICE", code: "2" },
      {label: "CHILE", code: "3" },
      {label: "Santander", code: "4" },
      {label: "Scotiabank", code: "5" }
    ]
  }

  getNumeroCuotas():any[] {
    return [
      {label: "1", code: "1"},
      {label: "2", code: "2"},
      {label: "3", code: "3"},
      {label: "4", code: "4"},
      {label: "5", code: "5"}
    ]
  }

  getModalidadesIngreso():any[] {
    return [
      {label: "FACTURA", code: "1"},
      {label: "INSPECCION", code: "2"}
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
      {label: "TODOS(AS)", code: "1"},
      {label: "ALONSO DE CORDOVA", code: "2"},
      {label: "LA SERENA", code: "3"},
      {label: "SANTIAGO CENTRO", code: "4"}
    ]
  }

  getTiposConsulta(): any[] {
    return [
      {label: "GENERAL", code: "1"}
    ]
  }
  
  getCanales(): any[] {
    return [
      {label: "TODOS(AS)", code: "0"},
      {label: "CORREDORES", code: "1"}
    ]
  }
  
  getCorredores(): any[] {
    return [
      {label: "TODOS(AS)", code: "0"},
      {label: "A y B Corredores de seguros", code: "1"},
      {label: "Actualrial", code: "2"}
    ]
  }
  
  getCompanias(): any[] {
    return [
      {label: "TODOS(AS)", code: "0"},
      {label: "REALE", code: "0"}
    ]
  }
  
  getRamos(): any[] {
    return [
      {label: "TODOS(AS)", code: "0"},
      {label: "Accidentes Personales", code: "1"},
      {label: "Auto", code: "2"},
      {label: "Hogar", code: "3"},
      {label: "SOAP", code: "4"},
      {label: "Vida", code: "5"}
    ]
  }

  getPeriodos(): any[] {
    return [
      {label: "REGISTRO", code: "0"}
    ]
  }
  
  getEstadosSimulacion(): any[] {
    return [
      {label: "VIGENTE", code: "1"},
      {label: "RECHAZADA", code: "2"}
    ]
  }
  
  getTiposVehiculo(): any[] {
    return [
      {label: "AUTOMOVIL", code: "1"},
      {label: "CAMIONETA", code: "2"},
      {label: "FURGON", code: "3"},
      {label: "MINIBUS", code: "4"},
      {label: "MOTO", code: "5"},
      {label: "STATION-WAGON", code: "6"},
      {label: "TODO TERRENO", code: "7"}
    ]
  }
  
  getUsosVehiculo(): any[] {
    return [
      {label: "PARTICULAR", code: "1"},
      {label: "COMERCIAL", code: "2"}
    ]
  }
  
  getSubUsosVehiculo(): any[] {
    return [
      {label: "DIARIO", code: "1"},
      {label: "FINES DE SEMANA", code: "2"},
      {label: "VACACIONAL", code: "3"}
    ]
  }
  
  getPerfilesAsegurado(): any[] {
    return [
      {label: "Propietario", code: "1"},
      {label: "Arrendatario", code: "2"}
    ]
  }
  
  getOcupacionesHabitacionales(): any[] {
    return [
      {label: "Casa Ocupacion Habitacional", code: "1"},
      {label: "Casa Ocupacion Temporal", code: "2"}
    ]
  }
  
  getTiposConstruccion(): any[] {
    return [
      {label: "Solida", code: "1"},
      {label: "Ligero Combustible", code: "2"}
    ]
  }
  
  getZonas(): any[] {
    return [
      {label: "Rural", code: "1"},
      {label: "Urbana", code: "2"}
    ]
  }
  
  getRegiones(): any[] {
    return [
      {label: "Antofagasta", code: ""},
      {label: "La Serena", code: ""},
      {label: "Metropolitana", code: ""}
    ]
  }  

  getTiposOperacion(): any {
    return [
      {label: "Simulacion", code: "1"},
      {label: "Propuesta", code: "2"}
    ]
  }

  getOpcionesDescuentoRecargo(): any[] {
    return [
      { label: "DESCUENTO", code: "1" },
      { label: "RECARGO", code: "2" }
    ];
  }

  getAccesorios(): any[] {
    return [
      { label: "AIRBAGS", code: "1" },
      { label: "AIRE ACONDICIONADO", code: "2" }
    ];
  }

  getPiezasPreexistencias(): any[] {
    return [
      { label: "ACOLCHADO DE TABLEROS", code: "2" },
      { label: "AIRBAGS", code: "1" }
    ];
  }

  getNivelesGravedad(): any[] {
    return [
      { label: "LEVE", code: "1" },
      { label: "MEDIANO", code: "2" },
      { label: "GRAVE", code: "3" }
    ];
  }

  getTiposVehiculosPesados(): any[] {
    return [
      { label: "BUS", code: "1"},
      { label: "CAMION", code: "2"},
      { label: "MINIBUS", code: "3"},
      { label: "REMOLQUE", code: "4"},
      { label: "SEMIRREMOLQUE", code: "5"},
      { label: "TRACTO CAMION", code: "6"}
    ]
  }

  getUsosVehiculosPesados(): any[] {
    return [
      {label: "COMERCIAL", code: "2"}
    ]
  }

  getSubUsosCamion(): any[] {
    return [
      { label: "TRANSPORTE CARGA FORESTAL", code: "1"},
      { label: "TRANSPORTE MATERIALES PARA LA MINERÍA", code: "2"},
      { label: "TRANSPORTE HORMIGÓN Y MATERIALES DE CONSTRUCCIÓN", code: "3"},
      { label: "TRANSPORTE DE ANIMALES VIVOS", code: "4"},
      { label: "TRANSPORTE DE CONTENEDORES", code: "5"},
      { label: "TRANSPORTE DE ESCOMBROS", code: "6"},
      { label: "TRANSPORTE DE ALIMENTOS NO REFRIGERADOS", code: "7"},
      { label: "TRANSPORTE DE ALIMENTOS REFRIGERADOS", code: "8"},
      { label: "TRANSPORTE DE VEHÍCULOS Y MAQUINARIAS", code: "9"},
      { label: "OTROS (EXCLUYE TTE. PÚB. DE PASAJEROS, TTE. COMB. Y TTE. CARGAS PELIGROSAS, EXPL. Y/O CORROSIVAS)", code: "10"}
    ]
  }

  getClausulasAdicionalesPesados(): any[] {
    return [
      { label: "COBERTURA CAMINOS PRIVADO", code: "1"},
      { label: "COBERTURA DE CARGA Y DESCARGA", code: "2"},
      { label: "COBERTURA DE TRABAJO EN FAENA", code: "3"},
      { label: "COBERTURA TRASLADO DEL VEHÍCULO", code: "4"}
    ]
  }
}
