import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-benefits-section',
  templateUrl: './benefits-section.component.html',
  styleUrls: ['./benefits-section.component.scss']
})

export class BenefitsSectionComponent implements OnInit {
  
  BenefitsList: {
    imgPath: string,
    imgName: string,
    title: string,
    text: string
  }[];
  
  ngOnInit() {
    
    this.BenefitsList = [
      {
        imgPath: '/assets/img/svg/bg-1.svg',
        imgName: '',
        title: 'Send requests easily using different settings',
        text: 'Configure an application to use different settings in different parts of your application. Generate different requests to different services without troubles.'
  },
      {
        imgPath: '/assets/img/svg/bg-2.svg',
        imgName: '',
        title: 'Send request from within an object',
        text: 'Once you have got an object as an response for an URL you are able to send further quests using that object. No need to specify the URL each time.'
      },
      {
        imgPath: '/assets/img/svg/bg-3.svg',
        imgName: '',
        title: 'Use meaningful names instead of URLs',
        text: 'Once you receive an object from an URL you can use meaningful names to access data next time. There is no need to remember each URL you use.'
      },
      {
        imgPath: '/assets/img/svg/bg-4.svg',
        imgName: '',
        title: 'Specify custom HTTP methods',
        text: 'It is possible to add custom HTTP methods. Add unique logic to a custom method and receive what you need with a server response.'
      },
      {
        imgPath: '/assets/img/svg/bg-5.svg',
        imgName: '',
        title: 'Work with nested RESTful resources',
        text: 'Ngx-restantugal has built-in features to work with nested entities.'
      },
      {
        imgPath: '/assets/img/svg/bg-6.svg',
        imgName: '',
        title: 'Do not create new object for each request',
        text: 'Send first request, receive an object and use it further to make server requests instead of creating new objects each time.'
      }
    ];
  }
}