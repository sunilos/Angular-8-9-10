import { Component, OnInit } from '@angular/core';


/**
 * Welcome controller
 * 
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd* 
 * 
 */
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Welcome to SunilOS !';

  constructor() { }

  ngOnInit() {
  }

}
