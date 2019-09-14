import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarksheetService } from '../marksheet.service';

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

  success:boolean = true;
  /**
   * Inject actived rout object 
   */
  constructor(private aroute: ActivatedRoute, private router: Router, private service:MarksheetService) { }

  ngOnInit() {
    var _self = this;
    this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"));
    this.service.get(this.form.id, function(res){
      _self.form = res.result.data;
    });
 
    console.log("------------------>", this.service.today());

  }

  save(){
    var _self = this;
    this.service.save(this.form, function(res){
      _self.message = "Record is successfully saved..";
      _self.success = res.success;
      console.log('Ctl',res);
    });
  }

  search(){
    this.router.navigateByUrl('/marksheetlist');
  }
}

