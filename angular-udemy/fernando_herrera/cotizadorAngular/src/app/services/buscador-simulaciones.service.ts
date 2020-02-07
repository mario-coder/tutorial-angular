import { Injectable } from '@angular/core';
import { Simulacion } from '../domain/simulacion';
import { simulaciones } from './data/simulaciones';

@Injectable({
  providedIn: 'root'
})
export class BuscadorSimulacionesService {

  constructor() { }

  getSimulacionesLarge() {
    return <Simulacion[]> simulaciones.data
  }
}
