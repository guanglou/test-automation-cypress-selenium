import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  title = 'angular-reactive-forms';
  registrationForm: FormGroup;
  currentPage = 'student-register';
  index = 0;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {

  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      studentName: ['James Wong'],
      studentID: ['S123456'],
      gender: ['male'],
      registeredUnits: this.fb.group({
        unit1: false,
        unit2: true,
        unit3: true
      }),
      dob: [new Date().toLocaleDateString('en-CA')],
      email: [],
      password: ['123456'],
      studentAddress: this.fb.group({
        city: ['Canberra'],
        state: ['ACT'],
        postalCode: ['3200']
      })
    });

  }

  onSubmit(){
    console.log(this.registrationForm.value);

    this.registrationService.register(this.registrationForm.value)
      .subscribe(
        data => {
          console.log('success!', data);
        },
        error => console.log('error!', error)
      );
  }

  cancel() {
    console.log('Cancel btn is clicked + ' + this.index++);

  }

  cancelBtnClass() {
    console.log( this.currentPage === 'student-register' && !this.canCancel() ? 'disabled' : '' );
    return this.currentPage === 'student-register' && !this.canCancel() ? 'disabled' : '';
  }

  canCancel() {
    return false;
  }

  isShowingCancel() {
    return false;
  }


}
