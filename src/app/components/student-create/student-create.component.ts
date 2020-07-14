import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, FormArray, Validators, RadioControlValueAccessor } from '@angular/forms'
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  studentForm: FormGroup

  constructor( 
    public formBuilder: FormBuilder,
    public studentsService: StudentsService,
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required,  Validators.minLength(3)] ),
      email: new FormControl('', Validators.required )
     
  });
}
registerStudent() {
  this.studentsService.createStudent(this.studentForm.value).subscribe((res) => {
    console.log(this.studentForm.status);
    console.log(this.studentForm.value);
      this.studentForm.reset()
      this.router.navigate(['/students']);
    
  })
}

}
