import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  //Server error
  public success: boolean = true;

  //Server success/fail message
  public message = "";

  //Login form    
  form = {
    "loginId": "",
    "password": ""
  };

  //Login Input errors
  inputError = {};

  /**
   * Clear input errors
   */
  clearError() {
    this.message ="";
    this.inputError = {
      "loginId": "",
      "password": ""
    };
  }

  /**
   * Inject User Service and Router
   * 
   * @param router 
   * @param service 
   */
  constructor(private router: Router, private service: UserService) { //inject router 
  }

  ngOnInit() {
    this.clearError();
  }

  /**
   * Sign in user
   */
  signIn() {
    let _self = this;
    _self.clearError();
    _self.service.authenticate(_self.form, function (res, error) {

      //If server error
      if (error) {
        _self.success = false;
        _self.message = res.message;
        return;
      }

      _self.success = res.success;
      console.log('I1 am here', _self.success);

      if (_self.success) {
        console.log('I am here');
        localStorage.setItem("user", "User Name");
        _self.router.navigateByUrl('/welcome');
      } else {
        _self.message = "Invalid ID or Password";
        _self.inputError = res.result.inputerror
      }
    });
  }

  /**
   * Convert object into string
   * 
   * @param obj 
   * @returns 
   */
  getString(obj){
    return JSON.stringify(obj);
  }
}
