import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Cars } from 'src/app/Car';

import { ListService } from 'src/app/services/list.service';



@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  carros?: Cars;

  constructor( private listService: ListService, private route: ActivatedRoute) {
    this.getCarros()
  }

  ngOnInit(): void {
  }

  getCarros(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((Cars) => (this.carros = Cars));
  }

}
