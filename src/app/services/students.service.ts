import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


const apiUrl = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  // students: Student[]=[
  //   new Student(1, 'Ivan',  'Horvat', 'Ivan@gmail.com'),
  //   new Student(2, 'Ivan',  'Ivanic', 'Ivanic@gmail.com'),
  //   new Student(3, 'Marko',  'Markic', 'Marko@gmail.com'),
  //   new Student(4, 'Slaven',  'Slavkic', 'Slavkic@gmail.com'),
  //   new Student(5, 'Ivana',  'Horvatic', 'Ivana@gmail.com'),
  //   new Student(6, 'Ivanka',  'Ivankic', 'Ivanka@gmail.com'),
  //   new Student(7, 'Hrvoje',  'Hrvatinic', 'hrvoje@gmail.com'),
  //   new Student(8, 'Karlo',  'Karlovic', 'karlo@gmail.com'),
  //   new Student(9, 'Karla',  'Mazuranic', 'Karla@gmail.com'),
  //   new Student(10, 'Slaven',  'Maranovic', 'Slaven@gmail.com'),
  // ]
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor( private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
   return this.http.get<Student[]>(apiUrl);
  }

  //create a student
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(apiUrl , JSON.stringify(student), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 
  //getting student by id
  getById(id): Observable<Student> {
    return this.http.get<Student>(apiUrl + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
//
  updateStudent(id:number, student: Student): Observable<Student> {
    return this.http.put<Student>(apiUrl + '/' +id, JSON.stringify(student), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  deleteStudent(id:number): Observable<Student>{
    return this.http.delete<Student>(apiUrl + '/'+id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  ///error handler
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
