import { Injectable } from '@angular/core';
import { Car } from '../../../../AngularDemo/src/app/domain/car';
import { cars } from './data/cars-large';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCarsLarge() {
    return <Car[]> cars.data
  }
}
