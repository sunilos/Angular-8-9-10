import { Component } from '@angular/core';

/**
 * Main  controller of application
 * 
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd 
 * 
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Rays Technologies';
  subtitle = 'Open Source Knowledge Academe';

  /**
   * Get user from local storage
   * @returns 
   */
  getUser(){
    let user ="Guest";
    if(localStorage.getItem("user")){
      user = localStorage.getItem("user");
    }
    return user;
  }
}
