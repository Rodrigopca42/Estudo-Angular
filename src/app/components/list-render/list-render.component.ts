import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  carros = [
    {name: 'Maverik', type: 'Ford'},
    {name: 'Opala cupê', type: 'Ford'},
    {name: 'HR-V', type: 'Honda'},
    {name: 'Civic', type: 'Honda'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
