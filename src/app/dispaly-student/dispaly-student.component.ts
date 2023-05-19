import { Component } from '@angular/core';
import { AddStudentComponent } from '../add-student/add-student.component';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-dispaly-student',
  templateUrl: './dispaly-student.component.html',
  styleUrls: ['./dispaly-student.component.css']
})
export class DispalyStudentComponent {
  showFormForUpdate = false;
    student:any = {
      id: 0,
      name: '',
      fee: 0
    };


    

  students:any = [];

  constructor(private studentsService:StudentsService) { }

  ngOnInit(): void {
    this.students = this.studentsService.getStudents();
  }

  updateStudent(student:any) {
    this.student = student;
    this.showFormForUpdate = true;
    console.log(this.student);


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

    this.showFormForUpdate = false;


  }

 
 


}
