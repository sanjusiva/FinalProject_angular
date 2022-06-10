import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material/material.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  //{path:'',component:MaterialComponent},
  {path:'',component:LoginComponent},
  {path:'course',component:CourseComponent},
  {path:'login',component:LoginComponent},
  {path:'material',component:MaterialComponent},
  {path:'user',component:UserViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
