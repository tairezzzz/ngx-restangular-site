import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsFormService } from '../../core/services/contacts-form.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
  
})
export class FooterComponent implements OnInit, OnDestroy {

  dataInfo: {
    name: string,
    email:  string,
    text: string,
  };

  labels: {
    hiddenLabelName: boolean;
    hiddenLabelEmail: boolean;
    hiddenLabelMsg: boolean;
  };

  serverRequest = false;
  httpRequest: Subscription;
  sendModel$: Subject<any>;

  responseText: string;
  responseStatus: boolean;
  
  
  constructor(
    public contactsFormService: ContactsFormService,
  ) { this.sendModel$ = new Subject(); }

  ngOnInit() {
    this.dataInfo = {
      name: '',
      email: '',
      text: '',
    };

    this.labels = {
      hiddenLabelName: false,
      hiddenLabelEmail: false,
      hiddenLabelMsg: false,
    };

    this.httpRequest = this.sendModel$
      .switchMap((model: {[key: string]: any}) => {
        return this.contactsFormService.sendEmail(model);
      })
      .subscribe((res: any) => {
        res.status ?
          this.responseText = `Thank you, your message has been sent!` :
          this.responseText = `Sorry, there's happened something wrong!`;

        this.responseStatus = true;
      });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.sendModel$.next(form.form.getRawValue()); // emits formModel

      form.reset(); // resets formControls

      for (const key in this.labels) { // shows back labels
        if (this.labels.hasOwnProperty(key)) {
          this.labels[key] = false;
        }
      }
      this.serverRequest = true;
    }
  }
  
  ngOnDestroy() {
    if (this.serverRequest) {
      this.httpRequest.unsubscribe();
      this.responseStatus = false;
    }
  }

  onEdit(value) {
    this.contactsFormService.hideLabel(value, this.labels); // hides labels on edit
    if (this.responseStatus) {
      this.responseText = ''; // removes responseText value if client is going to send more then one email
    }
  }
}