import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  title = 'SunilOS Open Source Learning Center';
  price = 99.99;
  todaydate = new Date();
  person = { name: 'Ram', age: '25', city : "Mumbai" };
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  constructor() { }

  ngOnInit() {
  }

}
