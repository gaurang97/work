import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppComponents, AppRoutes } from "./app.routing";

import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CentersComponent } from './centers/centers.component';
import { SkillsComponent } from './skills/skills.component';
import { LevelsComponent } from './levels/levels.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { StudentsComponent } from './students/students.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { RolesComponent } from './roles/roles.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppComponents,
    DashboardComponent,
    CoursesComponent,
    CentersComponent,
    SkillsComponent,
    LevelsComponent,
    ObjectivesComponent,
    StudentsComponent,
    AccountsComponent,
    AssessmentsComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ChartModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
