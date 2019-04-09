import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Provides rest communication with marksheet endpoint
 */
@Injectable()
export class DocumentService {

  endpoint = "http://localhost:8080/Document/";

  constructor(private http: HttpClient) { }

  /**
   * Gets a document
   * 
   * @param id 
   * @param response 
   */
  get(id: number, callback) {
    this.http.get(this.endpoint + "get/" + id).subscribe((successData) => {
      callback(null, successData);
      console.log("Get:", successData);
    }, (failData) => {
      callback(failData);
    });
  }

  /**
   * Searches document
   * 
   * @param callback 
   */
  search(form, callback) {
    //subscribe methods receives two parameters, first parameter is success callback and second parameter is fail callback 
    this.http.post(this.endpoint + "search", form).subscribe((successData) => {
      callback(null, successData);
      console.log("Search", successData);
    }, (failData) => {
      callback(failData);
    });
  }

  /**
   * Delets a document
   * 
   * @param id 
   * @param response 
   */
  delete(id: number, callback) {
    //subscribe methods receives two parameters, first parameter is success callback and second parameter is fail callback 
    this.http.get(this.endpoint + "delete/" + id).subscribe((successData) => {
      callback(null, successData);
      console.log("Delete: ", successData);
    }, (failData) => {
      callback(failData);
    });
  }


  /**
   * Uploads a document
   * 
   * @param form 
   * @param callback 
   */
  upload(form, callback) {
    //subscribe methods receives two parameters, first parameter is success callback and second parameter is fail callback 
    this.http.post(this.endpoint + "upload", form).subscribe((successData) => {
      callback(null, successData);
      console.log("Save", successData);
    }, (failData) => {
      callback(failData, null);
    });
  }


}
