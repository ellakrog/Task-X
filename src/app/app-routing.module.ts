import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { InputHtmlComponent } from './components/input-html/input-html.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';


const routes: Routes = [
  { path: '',redirectTo:'/table', pathMatch:'full'},
  { path: 'table', component: InputHtmlComponent},
  { path: 'students', component: StudentTableComponent },
  { path: 'student-create', component:StudentCreateComponent },
  { path: 'student-edit/:id', component: StudentEditComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
