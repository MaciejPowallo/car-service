import { Injectable } from '@angular/core';
import {Car} from './cars-list/models/car';
import {Observable} from 'rxjs/Observable';
import {Http} from "@angular/http";


@Injectable()
export class CarsService {
  
  private apiUrl : string = "http://localhost:3000/api/cars";

  constructor(private http : Http) { }

  getCars() : Observable<Car[]> {
  	return this.http.get(this.apiUrl)
  	.map((res) => res.json())
  }

}
