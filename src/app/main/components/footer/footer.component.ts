import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsFormService } from '../../core/services/contacts-form.service';
import { Observable } from "rxjs/Rx";

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
  serverRequest = false;
  request;
  
  responseText: string;
  responseStatus: boolean;

  labels: {
    hiddenLabelName: boolean;
    hiddenLabelEmail: boolean;
    hiddenLabelMsg: boolean;
  };
  
  footerSocialsList: {
    imgPath: string,
    linkPath: string,
    modifier: boolean,
    colorModifier: boolean,
  }[];
  
  
  constructor(
    public contactsFormService: ContactsFormService,
  ) {}

  ngOnInit() {
    
    this.dataInfo = {
      name: '',
      email:  '',
      text: '',
    };

    this.labels = {
      hiddenLabelName: false,
      hiddenLabelEmail: false,
      hiddenLabelMsg: false,
    };
  
    this.footerSocialsList = [
      {
        imgPath: '/assets/img/svg/sprite.min.svg#fb',
        linkPath: '01',
        modifier: false,
        colorModifier: true,
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#in',
        linkPath: '02',
        modifier: false,
        colorModifier: true,
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#github',
        linkPath: '03',
        modifier: true,
        colorModifier: true,
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#behance',
        linkPath: '04',
        modifier: true,
        colorModifier: true,
      
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#tw',
        linkPath: '05',
        modifier: false,
        colorModifier: true,
      }
    ];
  }
  
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.request = this.contactsFormService.sendEmail(form.form.getRawValue())
      .subscribe((res: any) => {
        if (res.status) {
          this.responseText = "Thank you, your message has been sent!";
        } else {
          this.responseText = "Sorry, there's happened something wrong!";
        }
        this.responseStatus = true;
      });
      
      form.reset();
      for (let key in this.labels) {
        this.labels[key] = false;
      }
      this.serverRequest = true;
    }
  }
  
  ngOnDestroy() {
    if (this.serverRequest) {
      this.request.unsubscribe();
    }
  }

  onEdit(value) {
    this.contactsFormService.hideLabel(value, this.labels);
  }
}