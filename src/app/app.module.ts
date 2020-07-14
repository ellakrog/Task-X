import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumOnlyDirective } from './num-only.directive';
import { InputHtmlComponent } from './components/input-html/input-html.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NumOnlyDirective,
    InputHtmlComponent,
    StudentTableComponent,
    StudentCreateComponent,
    StudentEditComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
