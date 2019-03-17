import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marksheetlist',
  templateUrl: './marksheetlist.component.html',
  styleUrls: ['./marksheetlist.component.css']
})
export class MarksheetlistComponent implements OnInit {

  message = "";
  
  list = [{"id":1,"rollNo":"1","name":"Rajesh Verma","physics":99,"chemistry":99,"maths":99,"studentId":1,"createdBy":null,"modifiedBy":null,"createdDatetime":null,"modifiedDatetime":null},{"id":2,"rollNo":"88","name":"Ashish Nehra","physics":88,"chemistry":33,"maths":33,"studentId":3,"createdBy":"rahul.sahu@nenosystems.com","modifiedBy":"superadmin@gmail.com","createdDatetime":"2014-07-22T08:20:40.000+0000","modifiedDatetime":"2014-09-29T14:30:38.000+0000"},{"id":3,"rollNo":"12","name":"Manish Sharma","physics":11,"chemistry":11,"maths":11,"studentId":2,"createdBy":null,"modifiedBy":null,"createdDatetime":null,"modifiedDatetime":null},{"id":4,"rollNo":"19","name":"Manish Sharma","physics":33,"chemistry":33,"maths":33,"studentId":2,"createdBy":null,"modifiedBy":null,"createdDatetime":null,"modifiedDatetime":null},{"id":5,"rollNo":"10","name":"mohan lal","physics":77,"chemistry":77,"maths":77,"studentId":6,"createdBy":null,"modifiedBy":null,"createdDatetime":null,"modifiedDatetime":null},{"id":7,"rollNo":"15","name":"Manish Sharma","physics":44,"chemistry":44,"maths":44,"studentId":2,"createdBy":null,"modifiedBy":null,"createdDatetime":null,"modifiedDatetime":null},{"id":8,"rollNo":"11","name":"Manish Sharma","physics":47,"chemistry":47,"maths":14,"studentId":2,"createdBy":null,"modifiedBy":null,"createdDatetime":null,"modifiedDatetime":null}];

  form = { 
    "rollNo":"1",
    "name":"Rajesh Verma",
  };

  constructor(private router: Router) { //inject router 
  }

  ngOnInit() {
  }

  edit(id){
    this.router.navigateByUrl('/marksheet/' + id);
  }

  delete(id){
    this.message = id + "deleted";
  }

  search(){
    this.message =  "Searched" + this.form.name;
  }

}
