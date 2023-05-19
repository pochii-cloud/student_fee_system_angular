import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  showForm = false;
  updateForm = false;
  students = [
    {
    
      name: 'John',
      age : 20,
      fee: 1000
    },
  ];

  constructor() { }

  generateId() {
    return this.students.length > 0 ? Math.max(...this.students.map((s:any) => s.id)) + 1 : 1;
  }

  getStudents() {
    return this.students;
  }

  addOrUpdateStudent(student:any) {
    if(student.id === 0) {
      student.id = this.generateId();
      this.students.push(student);
    } else {
      const index = this.students.findIndex((s:any) => s.id === student.id);
      this.students[index] = student;
    }
  }

}
