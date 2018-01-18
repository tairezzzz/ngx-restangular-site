import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-benefits-section',
  templateUrl: './benefits-section.component.html',
  styleUrls: ['./benefits-section.component.scss']
})

export class BenefitsSectionComponent implements OnInit {
  
  BenefitsList: {
    bgPath: string,
    imgPath: string,
    imgName: string,
    imgBorderModifier: string,
    bgSizeModifier: string,
    picSizeModifier: string,
    itemBorderModifier: string,
    title: string,
    titleBorderModifier: string,
    text: string,
  }[];
  
  ngOnInit() {
    
    this.BenefitsList = [
      {
        bgPath: '/assets/img/svg/bg-1.svg',
        imgPath: '/assets/img/svg/parallax-1.svg',
        imgName: '',
        imgBorderModifier: 'benefits-list__img_border_1',
        bgSizeModifier: 'benefits-list__img-bg_size_1',
        picSizeModifier: 'benefits-list__img-pic_size_1',
        itemBorderModifier: 'benefits-list__item_border_1',
        title: 'Send requests easily using different settings',
        titleBorderModifier: 'benefits-list__title_border_1',
        text: 'Configure an application to use different settings in different parts of your application. Generate different requests to different services without troubles.',
      },
      {
        bgPath: '/assets/img/svg/bg-2.svg',
        imgPath: '/assets/img/svg/parallax-2.svg',
        imgName: '',
        imgBorderModifier: 'benefits-list__img_border_2',
        bgSizeModifier: 'benefits-list__img-bg_size_2',
        picSizeModifier: 'benefits-list__img-pic_size_2',
        itemBorderModifier: 'benefits-list__item_border_2',
        title: 'Send request from within an object',
        titleBorderModifier: 'benefits-list__title_border_2',
        text: 'Once you have got an object as an response for an URL you are able to send further quests using that object. No need to specify the URL each time.',
      },
      {
        bgPath: '/assets/img/svg/bg-3.svg',
        imgPath: '/assets/img/svg/parallax-3.svg',
        imgName: '',
        imgBorderModifier: 'benefits-list__img_border_3',
        bgSizeModifier: 'benefits-list__img-bg_size_3',
        picSizeModifier: 'benefits-list__img-pic_size_3',
        itemBorderModifier: 'benefits-list__item_border_3',
        title: 'Use meaningful names instead of URLs',
        titleBorderModifier: 'benefits-list__title_border_3',
        text: 'Once you receive an object from an URL you can use meaningful names to access data next time. There is no need to remember each URL you use.',

      },
      {
        bgPath: '/assets/img/svg/bg-4.svg',
        imgPath: '/assets/img/svg/parallax-4.svg',
        imgName: '',
        imgBorderModifier: 'benefits-list__img_border_4',
        bgSizeModifier: 'benefits-list__img-bg_size_4',
        picSizeModifier: 'benefits-list__img-pic_size_4',
        itemBorderModifier: 'benefits-list__item_border_4',
        title: 'Specify custom HTTP methods',
        titleBorderModifier: 'benefits-list__title_border_4',
        text: 'It is possible to add custom HTTP methods. Add unique logic to a custom method and receive what you need with a server response.',
      },
      {
        bgPath: '/assets/img/svg/bg-5.svg',
        imgPath: '/assets/img/svg/parallax-5.svg',
        imgName: '',
        imgBorderModifier: 'benefits-list__img_border_5',
        bgSizeModifier: 'benefits-list__img-bg_size_5',
        picSizeModifier: 'benefits-list__img-pic_size_5',
        itemBorderModifier: 'benefits-list__item_border_5',
        title: 'Work with nested RESTful resources',
        titleBorderModifier: 'benefits-list__title_border_5',
        text: 'Ngx-restantugal has built-in features to work with nested entities.',
      },
      {
        bgPath: '/assets/img/svg/bg-6.svg',
        imgPath: '/assets/img/svg/parallax-6.svg',
        imgName: '',
        imgBorderModifier: 'benefits-list__img_border_6',
        bgSizeModifier: 'benefits-list__img-bg_size_6',
        picSizeModifier: 'benefits-list__img-pic_size_6',
        itemBorderModifier: 'benefits-list__item_border_6',
        title: 'Do not create new object for each request',
        titleBorderModifier: 'benefits-list__title_border_6',
        text: 'Send first request, receive an object and use it further to make server requests instead of creating new objects each time.',
      }
    ];
  }
}