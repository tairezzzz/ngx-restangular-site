import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactsFormService {
  
  constructor(private http: HttpClient) { }
  
  sendEmail(model) {
    return this.http.post('http://localhost:54800/send-mail', model);
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
