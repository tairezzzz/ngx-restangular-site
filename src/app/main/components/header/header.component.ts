import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
 headerSocialsList: {
   imgPath: string,
   linkPath: string,
   modifier: boolean
 }[];
  
  constructor() {}
  
  ngOnInit() {
  
    this.headerSocialsList = [
      {
        imgPath: '/assets/img/svg/sprite.min.svg#fb',
        linkPath: 'https://www.facebook.com/2muchcoffeecom',
        modifier: false
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#in',
        linkPath: 'https://www.linkedin.com/company/2muchcoffee',
        modifier: false
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#github',
        linkPath: 'https://github.com/2muchcoffeecom',
        modifier: true
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#behance',
        linkPath: 'https://www.behance.net/2muchcoffee',
        modifier: true
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#tw',
        linkPath: 'https://twitter.com/2muchcoffeecom',
        modifier: false
      }
    ];
  }
}