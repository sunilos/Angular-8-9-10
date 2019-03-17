import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarksheetlistComponent } from './marksheetlist/marksheetlist.component';
import { MarksheetComponent } from './marksheet/marksheet.component';

import { MarksheetService } from './marksheet.service';


/**
 * Application module configure application conponents 
 * 
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd 
 * 
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    MarksheetlistComponent,
    MarksheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  //  ReactiveFormsModule,
  ],
  providers: [MarksheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
