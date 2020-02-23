import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {


  constructor(private router: Router, private service: RoleService) { //inject router 
  }


  ngOnInit() {
  }

}
