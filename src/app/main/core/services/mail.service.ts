import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailService {

  constructor(private http: HttpClient) { }
  
  sendEmail(model) {
    return this.http.post('http://localhost:54800/send-mail', model);
  }

}
