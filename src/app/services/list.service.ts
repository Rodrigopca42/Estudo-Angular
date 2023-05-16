import { Injectable } from '@angular/core';
import { Cars } from '../Car';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(Car: Cars[], carros: Cars){
    return Car.filter((c)=> carros.name !== c.name);
  }

}
