import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
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

export const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "courses", component: CoursesComponent },
    { path: "skills", component: SkillsComponent },
    { path: "levels", component: LevelsComponent },
    { path: "objectives", component: ObjectivesComponent },
    { path: "students", component: StudentsComponent },
    { path: "accounts", component: AccountsComponent },
    { path: "centers", component: CentersComponent },
    { path: "roles", component: RolesComponent },
    { path: "assessments", component: AssessmentsComponent },

];

export const AppComponents: any = [
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    CoursesComponent,
    SkillsComponent,
    LevelsComponent,
    ObjectivesComponent,
    StudentsComponent,
    AccountsComponent,
    AssessmentsComponent,
    CentersComponent,
    RolesComponent
];