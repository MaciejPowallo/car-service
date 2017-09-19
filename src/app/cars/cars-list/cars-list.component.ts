import { Component, OnInit } from '@angular/core';
import {Car} from './models/car';
import {CarsService} from "../cars.service";

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  totalCost : number;
  grossCost : number;

  cars : Car[];
 
  constructor(private carsServices : CarsService) { }

  ngOnInit() {
    this.loadCars();
  	this.countTotalCost()
  }

  loadCars() : void {
    this.carsServices.getCars().subscribe((cars) => {
      this.cars = cars;
    })
  }

  countTotalCost() : void {
  	this.totalCost = this.cars
  	.map((car) => car.cost)
  	.reduce((prev,next) => prev + next);
  }

  onShownGross(grossCost : number) : void {
  	this.grossCost = grossCost;
  }
}
