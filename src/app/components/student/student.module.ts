import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTableComponent } from 'src/app/components/student-table/student-table.component';
import { StudentCreateComponent } from 'src/app/components//student-create/student-create.component';
import { StudentEditComponent } from 'src/app/components/student-edit/student-edit.component';

import { StudentsService } from 'src/app/services/students.service'
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    StudentTableComponent,
    StudentCreateComponent,
    StudentEditComponent

  ],
  exports: [
    StudentTableComponent,
    StudentCreateComponent,
    StudentEditComponent
  ],
  providers: [
    StudentsService
  ]
})
export class StudentModule { }
