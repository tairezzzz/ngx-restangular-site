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
   ariaLabel: string,
   modifier: boolean
 }[];
  
  constructor() {}
  
  ngOnInit() {
  
    this.headerSocialsList = [
      {
        imgPath: '/assets/img/svg/sprite.min.svg#fb',
        linkPath: 'https://www.facebook.com/2muchcoffeecom',
        ariaLabel: '2muchcoffee company facebook page',
        modifier: false
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#in',
        linkPath: 'https://www.linkedin.com/company/2muchcoffee',
        ariaLabel: '2muchcoffee company linkedin page',
        modifier: false
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#github',
        linkPath: 'https://github.com/2muchcoffeecom',
        ariaLabel: '2muchcoffee company github page',
        modifier: true
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#behance',
        linkPath: 'https://www.behance.net/2muchcoffee',
        ariaLabel: '2muchcoffee company behance page',
        modifier: true
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#tw',
        linkPath: 'https://twitter.com/2muchcoffeecom',
        ariaLabel: '2muchcoffee company twitter page',
        modifier: false
      }
    ];
  }
}