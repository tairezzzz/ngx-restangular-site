import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
  
})
export class FooterComponent {
  
  footerSocialsList = [
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