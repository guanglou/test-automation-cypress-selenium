import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentRegisterComponent } from './forms/student-register/student-register.component';
import { HomeComponent } from './home/home.component';
import { StudentInfoComponent } from './view/student-info/student-info.component';
import { DynamicComponentsComponent } from './view/dynamic-components/dynamic-components.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'forms/student-register', component: StudentRegisterComponent},
  {path: 'view/student-info', component: StudentInfoComponent},
  {path: 'view/dynamic-components', component: DynamicComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
