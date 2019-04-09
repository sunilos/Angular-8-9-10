import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { DocumentService } from '../service/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {


  //Is any error
  error = false;
  
  //Sucess/ Error message
  message = "";

  today = new Date();

  /**
   * Contains list of searched documents 
   */
  list = [];

  /**
   * Serach form on which list is filtered
   */
  searhForm = {
    "name": "",
    "description": "",
  };


  /**
   * Form contains document details to be added or updated
   */
  form = {
    "id": "",
    "name": "",
    "description": ""
  };

  /**
   * Constructor injectes services
   * 
   * @param service 
   */
  constructor(private service: DocumentService) { 
  }

  ngOnInit() {
    this.search(); //loads list 
  }

  /**
   * Searches document and get list
   */
  search() {
    var _self = this;
    this.service.search(this.searhForm, function (error, data) {
      if(error){
        _self.setMessage(true,'Server Error');
      }else{
        _self.list = data;
      }
    });
  }

  /**
  * Contains file's binary data
  */
  private fileToUpload;


  /**
   * Sets file data to fileToUpload attribute
   * 
   * @param files 
   */
  setFile(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  /**
   * Uploads a file. If id is 0 then new record is created in database else file is updated to given id record
   * 
   * @param id 
   */
  upload(id) {
    //Create multipart form
    let formData = new FormData();
    formData.append("file", this.fileToUpload, this.fileToUpload.name);
    formData.append("id", id);
    formData.append("description", this.form.description);

    var _self = this;

    //upload file
    this.service.upload(formData, function (error, response) {
      if (error) {
        _self.setMessage(true,'Server Error');
        console.log('Error', error);
      } else {
        _self.setMessage(false,"File is successfully uploaded");
        _self.today = new Date();
        _self.search();
      }
    });
  }

  /**
   * 
   * @param id Update file to an existing record
   * @param files 
   */
  updateFile(id, files: FileList) {
    this.setFile(files);
    this.upload(id);
  }

  /**
   * Deletes a record
   * @param id 
   */
  delete(id) {
    var _self = this;
    this.service.delete(id, function (error,data) {
      if(error){
        _self.setMessage(true,'Server Error');
      }else{
        _self.setMessage(false,'File is deleted');
        _self.search();
      }
    });
  }

  setMessage(err, msg){
    this.error = err;
    this.message = msg;
  }


}
