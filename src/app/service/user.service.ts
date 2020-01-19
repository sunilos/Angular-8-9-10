import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = "http://nenosystems.in:9080/ORSP10/User/";

  constructor(private http: HttpClient) { }


  get(id: number, response) {
    /*
    this.http.get(this.endpoint +"get/" + id).subscribe((data) => {
      response(data);
      console.log("Get:", data);
    });
    */

    var observer = this.http.get(this.endpoint + "get/" + id);

    observer.subscribe(function success(data) {
      response(data);
      console.log("Success", data);
    }, function fail(data) {
      console.log("Fail", data.statusText);
    });

  }

}
