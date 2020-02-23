import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  template: `
  <h2> Total person {{list.length}} </h2>
  <app-data *ngFor="let p of list"  [name]= p.name  [age]=p.age></app-data>
  `
})
export class TwoComponent implements OnInit {

  list = [
    {"name": "jay", "age":16},
    {"name": "Ajay", "age":18},
    {"name": "Vijay", "age":20},
  ];

  constructor() { }

  ngOnInit() {
  }

}
