import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url = 'http://localhost:3000/enroll';
  urlGetStudent = 'http://localhost:3000/get-student';

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  register(userData) {
    return this._http.post<any>(this.url, userData);
  }

  fetchStudents(){
    return this._http.get<Student>(this.urlGetStudent)
                .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message);
  }

}

