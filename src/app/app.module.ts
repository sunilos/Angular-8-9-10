import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarksheetlistComponent } from './marksheetlist/marksheetlist.component';
import { MarksheetComponent } from './marksheet/marksheet.component';


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
    FormsModule,
  //  ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'marksheet',
        component: MarksheetComponent
      },
      {
        path: 'marksheetlist',
        component: MarksheetlistComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
