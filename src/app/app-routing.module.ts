import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarksheetlistComponent } from './marksheetlist/marksheetlist.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { DocumentComponent } from './document/document.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

/**
 * Constant defines route of application controllers 
 */
const routes: Routes = [
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
		//pass route parameter :id
		path: 'marksheet/:id',
		component: MarksheetComponent
	},
	{
		path: 'marksheetlist',
		component: MarksheetlistComponent
	},
	{
		path: 'college',
		component: CollegeComponent
	},
	{
		//pass route parameter :id
		path: 'college/:id',
		component: CollegeComponent
	},
	{
		path: 'collegelist',
		component: CollegeListComponent
	},
	{
		path: 'pipe',
		component: PipeTestComponent
	}
	,
	{
		path: 'document',
		component: DocumentComponent
	}	
	,
	{
		path: 'one',
		component: OneComponent
	}	
	,
	{
		path: 'two',
		component: TwoComponent
	}	
];

/**
 * Angular module defines application route 
 * 
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd 
 * 
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
