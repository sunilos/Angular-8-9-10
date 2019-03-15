import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Login controller 
 * 
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd 
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userId = 'Enter User ID';
  password = '';
  message = 'No message';

  constructor(private router: Router) { //inject router 
  }

  ngOnInit() {
  }

  signIn(){
    if(this.userId == 'admin' && this.password =='admin'){
      this.router.navigateByUrl('/welcome');
    }else{
      this.message = 'Invalid login id or password'; 
    }
  }
}
