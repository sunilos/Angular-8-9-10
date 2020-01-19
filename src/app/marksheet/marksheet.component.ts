import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarksheetService } from '../service/marksheet.service';

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

  /**
   * Marksheet form object
   */
  form = { 
    "id":0, 
    "rollNo":"0",
    "name":"",
    "physics":0,
    "chemistry":0,
    "maths":0,
    "studentId":1
  };

  //Server message
  message = "";

  //Sever submittion is success or fail
  success:boolean = true;
  /**
   * Injects services 
   * 
   * @param aroute 
   * @param router 
   * @param service 
   */
  constructor(private aroute: ActivatedRoute, private router: Router, private service:MarksheetService) { }

  /**
   * Display record if primary key is received 
   */
  ngOnInit() {
    var _self = this;
    this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"));
    if ( !isNaN(this.form.id) && this.form.id > 0) {
      this.service.get(this.form.id, function (res, error) {
        if (error) {
          alert("Error:" + error.message);
          return;
        }
        _self.form = res.result.data;
      });
    }
  }

  /**
   * Save a record
   */
  save(){
    var _self = this;
    this.service.save(this.form, function(res,error){
      if(error){
        alert("Error{" + error.message);
        return;
      }
      _self.message = "Record is successfully saved..";
      _self.success = res.success;
      console.log('Ctl',res);
    });
  }

  /**
   * Go to search page 
   */
  search(){
    this.router.navigateByUrl('/marksheetlist');
  }
}

