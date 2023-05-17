import { Injectable } from '@angular/core';
import { Cars } from '../Car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/carros'

  constructor(private http: HttpClient) { }

  remove(Car: Cars[], carros: Cars){
    return Car.filter((c)=> carros.name !== c.name);
  }

  getAll(): Observable<Cars[]>{
    return this.http.get<Cars[]>(this.apiUrl)
  }

}
