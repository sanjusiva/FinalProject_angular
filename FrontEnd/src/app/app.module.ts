import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
import {HttpClientModule} from '@angular/common/http';
import { UserViewComponent } from './user-view/user-view.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { DetailViewComponent } from './detail-view/detail-view.component'
@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    UserViewComponent,
    CourseComponent,
    LoginComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
