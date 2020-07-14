import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputHtmlComponent } from 'src/app/components/input-html/input-html.component';
import { StudentsService } from 'src/app/services/students.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputHtmlComponent
  ],
  exports: [
    InputHtmlComponent
  ],
  providers: [
    StudentsService
  ]
})
export class TableModule { }
