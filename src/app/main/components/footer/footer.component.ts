import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MailService } from '../../core/services/mail.service';
  
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
  
})
export class FooterComponent implements OnInit {
  dataInfo;
  footerSocialsList: {
      imgPath: string,
      linkPath: string,
      modifier: boolean,
      colorModifier: boolean,
    }[];
  
  constructor(public mailService: MailService) {}
  ngOnInit() {
    
    this.dataInfo = {
      name: '',
      email:  '',
      text: '',
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
      console.log(form.form.getRawValue());
      this.mailService.sendEmail(form.form.getRawValue())
      .subscribe(res => console.log(res));
      form.reset();
    }
  }
}