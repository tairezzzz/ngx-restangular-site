import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable()
export class ContactsFormService {
  
  constructor(private http: HttpClient) { }
  
  sendEmail(model) {
    if (model) {
      return this.http.post(
        environment.sendMailEndpoint,
        {
          subject: 'New request from NGX-restangular',
          to: 'EMAIL_TO_SALES',
          ...model
        })
      .pipe(
        catchError((error: HttpErrorResponse) => Observable.of(error))
      )
    }
  }
  hideLabel(value, labels) {
    if (value.dirty && value.name === 'name') {
      labels.hiddenLabelName = true;
    }
    if (value.dirty && value.name === 'email') {
      labels.hiddenLabelEmail = true;
    }
    if (value.dirty && value.name === 'message') {
      labels.hiddenLabelMsg = true;
    }
  }
}
