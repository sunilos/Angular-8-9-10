import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * ActivatedRoute is used to read route parameters 
 */
import {ActivatedRoute} from "@angular/router";

/**
 *Marksheet controller
 *  
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd* 
*/
@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {

  form = { 
    "id":1, 
    "rollNo":"1",
    "name":"Rajesh Verma",
    "physics":99,
    "chemistry":99,
    "maths":99,
    "studentId":1
  };

  message = "";

  /**
   * Inject actived rout object 
   */
  constructor(private aroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"));
    this.message ="Editing " + this.form.id;
  }

  save(){
    this.message = this.form.name; 
  }

  search(){
    this.router.navigateByUrl('/marksheetlist');
  }
}

