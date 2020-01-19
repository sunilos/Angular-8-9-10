import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Provides rest communication with marksheet endpoint. 
 * Each method of this class receives response-callback method. 
 * Response callback method is called by Observable and passed data and error.
 * 
 */
@Injectable()
export class MarksheetService {

  //Rest endpoint
  endpoint = "http://api.sunilos.com:9080/ORSP10/Marksheet/";

  /**
   * Constructor injects HTTP service
   * 
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * Gets marksheet
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
   * Delets a marksheet
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
   * Searches marksheet
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
   * Add/Update marksheet
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

  /**
   * Test method
   */
  today() {
    var d = new Date();
    return d;
  }

}
