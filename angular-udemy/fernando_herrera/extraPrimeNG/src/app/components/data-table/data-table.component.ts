import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/domain/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  cars: Car[];
  cols: any[] = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
];

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.cars = this.carService.getCarsLarge()//.then(cars => this.cars = cars);
  }

}
