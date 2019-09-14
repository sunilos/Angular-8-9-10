import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarksheetService } from '../marksheet.service';

/**
 * Marksheet list controller
 */
@Component({
  selector: 'app-marksheetlist',
  templateUrl: './marksheetlist.component.html',
  styleUrls: ['./marksheetlist.component.css']
})
export class MarksheetlistComponent implements OnInit {

  message = "";
  
  list = [ 
    {"id":1,"rollNo":"1","name":"Rajesh Verma","physics":99,"chemistry":99,"maths":99,"studentId":1,"createdBy":null,"modifiedBy":null,"createdDatetime":null,"modifiedDatetime":null},
    {"id":2,"rollNo":"88","name":"Ashish Nehra","physics":88,"chemistry":33,"maths":33,"studentId":3,"createdBy":"rahul.sahu@nenosystems.com","modifiedBy":"superadmin@gmail.com","createdDatetime":"2014-07-22T08:20:40.000+0000","modifiedDatetime":"2014-09-29T14:30:38.000+0000"},
    {"id":8,"rollNo":"11","name":"Manish Sharma","physics":47,"chemistry":47,"maths":14,"studentId":2,"createdBy":null,"modifiedBy":null,"createdDatetime":null,"modifiedDatetime":null}
  ];

  form = { 
    "rollNo":"",
    "name":"",
  };

  constructor(private router: Router, private service:MarksheetService) { //inject router 
  }

  ngOnInit() {
    this.search(); //Loads list 
  }

  /**
   * Edit record 
   * 
   * @param id 
   */
  edit(id){
    this.router.navigateByUrl('/marksheet/' + id);
  }

  /**
   * Deletes a record
   * @param id 
   */
  delete(id){
    var _self = this;
    this.service.delete(id,function(data){
      _self.search();
    });
  }

  /**
   * Searches and get list
   */
  search(){
    var _self = this;
    this.service.search(this.form,function(res){
      console.log('Ctl',res);
      _self.list = res.result.data;
    });
  }

}
