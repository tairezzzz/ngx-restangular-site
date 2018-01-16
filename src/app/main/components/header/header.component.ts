import { Component, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
 headerSocialsList: { imgPath: string, linkPath: string }[];
  
  @ViewChild('header') header: ElementRef;
  
  constructor() {}
  
  ngOnInit() {
  
    this.headerSocialsList = [
      {
        imgPath: '/assets/img/svg/sprite.min.svg#fb',
        linkPath: '01'
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#in',
        linkPath: '02'
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#github',
        linkPath: '03'
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#behance ',
        linkPath: '04'
      },
      {
        imgPath: '/assets/img/svg/sprite.min.svg#tw',
        linkPath: '05'
      }
    ];
  }
}