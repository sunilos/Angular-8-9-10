import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  endpoint = "http://nenosystems.in:9080/ORSP10/Role/";

  constructor(private http: HttpClient) { }

  /**
   * Gets marksheet
   * 
   * @param id 
   * @param response 
   */
  get(id: number, response) {

    var observer = this.http.get(this.endpoint + "get/" + id);

    observer.subscribe(function success(data) {
      response(data);
      console.log("Success", data);
    }, function fail(data) {
      console.log("Fail", data.statusText);
    });

  }

  /**
   * Searches Role
   * 
   * @param response 
   */
  search(form, response) {
    this.http.post(this.endpoint + "search", form).subscribe((res) => {
      response(res);
      console.log("Search", res);
    });
  }

  /**
   * Delets a Role
   * 
   * @param id 
   * @param response 
   */
  delete(id: number, response) {
    this.http.get(this.endpoint + "delete/" + id).subscribe((res) => {
      response(res);
      console.log("Delete: ", res);
    });
  }

  /**
   * 
   * @param form Adds or updates a Role 
   * @param response 
   */
  save(form, response) {
    this.http.post(this.endpoint + "save", form).subscribe((data) => {
      response(data);
      console.log("Save", data);
    });
  }

}
