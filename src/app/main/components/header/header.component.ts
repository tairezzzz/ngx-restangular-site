import { Component, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';


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
  
  @ViewChild('header') header: ElementRef;
  
  constructor() {}
  
  ngOnInit() {
  
    this.headerSocialsList = [
      {
        imgPath: '/assets/img/svg/sprite.min.svg#fb',
        linkPath: '01',
        modifier: false
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#in',
        linkPath: '02',
        modifier: false
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#github',
        linkPath: '03',
        modifier: true
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#behance',
        linkPath: '04',
        modifier: true
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#tw',
        linkPath: '05',
        modifier: false
      }
    ];
  }
}