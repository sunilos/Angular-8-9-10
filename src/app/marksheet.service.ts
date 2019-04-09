import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Provides rest communication with marksheet endpoint
 */
@Injectable()
export class MarksheetService {

  endpoint = "http://localhost:8080/Marksheet/";

  constructor(private http: HttpClient) { }

  today() {
    var d = new Date();
    return d;
  }

  /**
   * Gets marksheet
   * 
   * @param id 
   * @param response 
   */
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

  /**
   * Searches marksheet
   * 
   * @param response 
   */
  search(form, response) {
    this.http.post(this.endpoint + "search", form).subscribe((data) => {
      response(data);
      console.log("Search", data);
    });
  }

  /**
   * Delets a marksheet
   * 
   * @param id 
   * @param response 
   */
  delete(id: number, response) {
    this.http.get(this.endpoint + "delete/" + id).subscribe((data) => {
      response(data);
      console.log("Delete: ", data);
    });
  }

  /**
   * 
   * @param form Adds or updates a record 
   * @param response 
   */
  save(form, response) {
    this.http.post(this.endpoint + "save", form).subscribe((data) => {
      response(data);
      console.log("Save", data);
    });
  }

}
