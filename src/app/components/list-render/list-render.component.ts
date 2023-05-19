import { Component, OnInit } from '@angular/core';

import { Cars } from 'src/app/Car';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  carros: Cars[]=[];

  carroDetails = '';

  constructor( private listService: ListService ) {
    this.getCarros()
  }

  ngOnInit(): void {
  }

  showAge(carros:Cars): void{
    this.carroDetails=`O ${carros.name}, foi fabricado em ${carros.age}, sendo eleito o CARRO DESSE ANO!`;
  }

  removeCarros(carros: Cars){
    this.carros = this.carros.filter((c)=> carros.name !== c.name);
    this.listService.remove( carros.id ).subscribe();
  }

  getCarros(): void{
    this.listService.getAll().subscribe((Cars) => (this.carros = Cars));
  }

}
