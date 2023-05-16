import { Component, OnInit } from '@angular/core';

import { Cars } from 'src/app/Car';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  carros: Cars[]=[
    {name: 'Maverick', type: 'Ford',age: 1969 },
    {name: 'Opala Coupe', type: 'Ford',age: 1970},
    {name: 'HR-V', type: 'Honda',age: 2019},
    {name: 'Civic', type: 'Honda',age: 2020}
  ];

  carroDetails = '';

  constructor( private listService: ListService ) { }

  ngOnInit(): void {
  }

  showAge(carros:Cars): void{
    this.carroDetails=`O ${carros.name}, foi fabricado em ${carros.age}, sendo eleito o CARRO DESSE ANO!`;
  }

  removeCarros(carros: Cars){
    console.log('Removendo Carros...');
    this.carros = this.listService.remove(this.carros, carros)
  }

}
