import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  //Rest endpoint
  endpoint = "http://nenosystems.in:9080/ORSP10/Role/";

  /**
   * Constructor injects HTTP service
   * 
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * Gets Role
   * 
   * @param id 
   * @param response 
   */
  get(id: number, responseCB) {
    let url = this.endpoint + "get/" + id;
    var observer = this.http.get(url);
    observer.subscribe(function success(data) {
      responseCB(data);
    }, function fail(data) {
      responseCB(data, true)
    });
  }

  /**
   * Delets a role
   * 
   * @param id 
   * @param response 
   */
  delete(id: number, responseCB) {
    let url = this.endpoint + "delete/" + id;
    this.http.get(url).subscribe(
      (data) => {
        responseCB(data);
      },
      (data) => {
        responseCB(data, true);
      });
  }


  /**
   * Searches role
   * 
   * @param response 
   */
  search(form, responseCB) {
    let url = this.endpoint + "search";
    this.http.post(url, form).subscribe(
      (data) => {
        responseCB(data);
      },
      (data) => {
        responseCB(data, true);
      });
  }


  /**
   * Add/Update role
   * @param form Adds or updates a record 
   * @param response 
   */
  save(form, responseCB) {
    let url = this.endpoint + "save";
    this.http.post(url, form).subscribe(
      (data) => {
        responseCB(data);
      },
      (data) => {
        responseCB(data, true);
      });
  }
}
