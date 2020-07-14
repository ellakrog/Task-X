import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  id:number;
  currentStudent: Student;
  
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.currentStudent = new Student();

    this.id = this.actRoute.snapshot.params['id'];
    
    this.studentsService.getById(this.id).subscribe(student => {
        console.log(student)
        this.currentStudent = student;
      }, 
      error => console.log(error));
     
  }

  updateEmployee() {
    this.studentsService.updateStudent(this.id, this.currentStudent).subscribe(data => 
      console.log(data), 
      error => console.log(error));
    this.currentStudent = new Student();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();   
   
  }

  gotoList() {
    this.router.navigate(['/students']);

  }


}
