import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  title = 'Title 2';
  public student: Student;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {

  }

  onClick() {
    this.registrationService.fetchStudents().subscribe(
      data => {
                this.student = data;
                console.log(this.student);
                sessionStorage.setItem('sessionData', JSON.stringify(data) ) ;
              },
      error => {
                console.log(error);
               }
    );

  }

}


