import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentsService } from '../students.service';


// interface Student{
//   id: number;
//   name: string;
//   age:number,
//   fee:number
// }

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})



export class AddStudentComponent {
  shouldShow = false;
    student:any = {
      id: 0,
      name: '',
      fee: 0
    };

    

  
    constructor(private studentsService:StudentsService) { 
      this.shouldShow = this.studentsService.showForm 
    }

    showForm() {

      this.shouldShow = !this.shouldShow;
      
      
    }
  
    addStudent() {
      if (this.student.name === '' || this.student.fee === '') {
        alert('Please enter name and fee');
        return;
      }
      this.studentsService.addOrUpdateStudent(this.student);
      this.student = {
        id: 0,
        name: '',
        fee: 0
      };

      this.shouldShow = false;


    }
}
