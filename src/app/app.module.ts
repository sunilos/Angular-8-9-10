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

import { MarksheetService } from './service/marksheet.service';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { RsPipe } from './pipe-test/rs';
import { DocumentComponent } from './document/document.component';
import { DocumentService } from './service/document.service';
import { MyDirDirective } from './my-dir.directive';
import { RoleComponent } from './role/role.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { DataComponent } from './data/data.component';


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
    MarksheetComponent,
    PipeTestComponent,
    RsPipe,
    DocumentComponent,
    MyDirDirective,
    RoleComponent,
    CollegeComponent,
    CollegeListComponent,
    OneComponent,
    TwoComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    //  ReactiveFormsModule,
  ],
  providers: [
    MarksheetService,
    DocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
