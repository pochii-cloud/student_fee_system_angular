import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
FormsModule

import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DispalyStudentComponent } from './dispaly-student/dispaly-student.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    DispalyStudentComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
