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