import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegisterComponent } from './forms/student-register/student-register.component';
import { HomeComponent } from './home/home.component';
import { StudentInfoComponent } from './view/student-info/student-info.component';
import { DynamicComponentsComponent } from './view/dynamic-components/dynamic-components.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegisterComponent,
    HomeComponent,
    StudentInfoComponent,
    DynamicComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
