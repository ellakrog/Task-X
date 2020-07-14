import { Component, OnInit } from '@angular/core';
import {StudentsService } from 'src/app/services/students.service'
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  studentList: Student[]
 
 
  constructor( private studentsService: StudentsService) { }

  ngOnInit(): void {
  this.getAllStudents();
  }

  getAllStudents(){
    this.studentsService.getStudents().subscribe( (students) => {
      this.studentList=students
    })
  }

  delete(id :number){
    console.log(id)
    this.studentsService.deleteStudent(id).subscribe( (student) => {
      this.getAllStudents();
    })
  }


}
