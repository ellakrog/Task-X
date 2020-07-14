import { Component, OnInit, SimpleChanges } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-input-html',
  templateUrl: './input-html.component.html',
  styleUrls: ['./input-html.component.css']
})
export class InputHtmlComponent implements OnInit {

  values ='';
 numberOfrows=[]



 HighlightRow : Number;
 ClickedRow:any; 

 studentList : Student[]=[]

  constructor(
    private studentsService: StudentsService
   
  ) { 
    this.ClickedRow = function(index){  
   
      this.HighlightRow=index 
  }

}

  ngOnInit(): void {
  }
 
update(value: string) { this.values = value;
    this.numberOfrows = Array.from(this.values.split(','),Number);
  }



  getStudentsToTable(){
    this.studentsService.getStudents().subscribe( (students) => {
      console.log(students)
      this.studentList=students
  });
}




}


