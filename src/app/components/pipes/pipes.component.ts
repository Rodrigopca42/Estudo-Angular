import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

 someText = "correndo para ver se o pipe funciona."

 today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
