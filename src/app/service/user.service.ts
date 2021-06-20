import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = "http://api.sunilos.com:9080/ORSP10/User/";

  constructor(private http: HttpClient) { }

  get(id: number, resCallback) {
    /*
    this.http.get(this.endpoint +"get/" + id).subscribe((data) => {
      response(data);
      console.log("Get:", data);
    });
    */

    var observer = this.http.get(this.endpoint + "get/" + id);

    observer.subscribe(function success(data) {
      resCallback(data);
      console.log("Success", data);
    }, function fail(data) {
      console.log("Fail", data.statusText);
      resCallback(data, true);
    });
  }

  /**
   * 
   * @param form Authenicate a User
   * @param compCB 
   */
  authenticate(form, compCB) {
    let url = 'http://api.sunilos.com:9080/ORSP10/Auth/login';
    this.http.post(url, form).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });    
  }
}
