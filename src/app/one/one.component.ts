import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor() { }

  list = [
    {"name": "Ram", "age":16},
    {"name": "Shyam", "age":18},
  ];

  ngOnInit() {
  }

}
