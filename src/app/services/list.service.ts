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

  remove(id: number){
    return this.http.delete<Cars>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Cars[]>{
    return this.http.get<Cars[]>(this.apiUrl)
  }

  getItem(id: number): Observable<Cars>{
      return this.http.get<Cars>(`${this.apiUrl}/${id}`);
  }

}
