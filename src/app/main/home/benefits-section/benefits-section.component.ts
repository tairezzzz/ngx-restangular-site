import { Component, OnInit } from '@angular/core';

import { RobotSvgComponent } from './robot-svg/robot-svg.component';
import { SatelliteSvgComponent } from './satellite-svg/satellite-svg.component';
import { RocketSvgComponent } from './rocket-svg/rocket-svg.component';
import { TrainSvgComponent } from './train-svg/train-svg.component';
import { UfoSvgComponent } from './ufo-svg/ufo-svg.component';
import { OneSvgComponent } from './one-svg/one-svg.component';

@Component({
  selector: 'app-benefits-section',
  templateUrl: './benefits-section.component.html',
  styleUrls: ['./benefits-section.component.scss'],
})

export class BenefitsSectionComponent implements OnInit {

  // Injecting Dynamic SVG Components
  robotSvgComponent = RobotSvgComponent;
  satelliteSvgComponent = SatelliteSvgComponent;
  rocketSvgComponent = RocketSvgComponent;
  trainSvgComponent = TrainSvgComponent;
  ufoSvgComponent = UfoSvgComponent;
  oneSvgComponent = OneSvgComponent;
  //
  
  benefitsList: {
    imgBorderModifier: string,
    itemBorderModifier: string,
    title: string,
    titleBorderModifier: string,
    text: string,
    textPaddingModifier: string,
    svg: any,
  }[];

  constructor() { }

  ngOnInit() {

    this.benefitsList = [
      {
        imgBorderModifier: 'benefits-list__img_border_robot',
        itemBorderModifier: 'benefits-list__item_border_robot',
        title: 'Send requests easily using different settings',
        titleBorderModifier: 'benefits-list__title_border_robot',
        text: `Set configuration to use various settings in diverse parts of your application. 
              Generate different requests to different services without troubles.`,
        textPaddingModifier: 'benefits-list__text_padding_robot',
        svg: this.robotSvgComponent,
      },
      {
        imgBorderModifier: 'benefits-list__img_border_satellite',
        itemBorderModifier: 'benefits-list__item_border_satellite',
        title: 'Send request from within an object',
        titleBorderModifier: 'benefits-list__title_border_satellite',
        text: `Once you have got an object as an response for an URL you are able to send further quests using that object. 
              No need to specify the URL each time.`,
        textPaddingModifier: 'benefits-list__text_padding_satellite',
        svg: this.satelliteSvgComponent,
      },
      {
        imgBorderModifier: 'benefits-list__img_border_rocket',
        itemBorderModifier: 'benefits-list__item_border_rocket',
        title: 'Use meaningful names instead of URLs',
        titleBorderModifier: 'benefits-list__title_border_rocket',
        text: `Once you receive an object from an URL you can use meaningful names to access data next time.
              There is no need to remember each URL you use.`,
        textPaddingModifier: 'benefits-list__text_padding_rocket',
        svg: this.rocketSvgComponent,
      },
      {
        imgBorderModifier: 'benefits-list__img_border_train',
        itemBorderModifier: 'benefits-list__item_border_train',
        title: 'Specify custom HTTP methods',
        titleBorderModifier: 'benefits-list__title_border_train',
        text: `It is possible to add custom HTTP methods. 
              Add unique logic to a custom method and receive what you need with a server response.`,
        textPaddingModifier: 'benefits-list__text_padding_train',
        svg: this.trainSvgComponent,
      },
      {
        imgBorderModifier: 'benefits-list__img_border_ufo',
        itemBorderModifier: 'benefits-list__item_border_ufo',
        title: 'Work with nested RESTful resources',
        titleBorderModifier: 'benefits-list__title_border_ufo',
        text: 'Ngx-restangular has built-in features to work with nested entities.',
        textPaddingModifier: 'benefits-list__text_padding_ufo',
        svg: this.ufoSvgComponent,
      },
      {
        imgBorderModifier: 'benefits-list__img_border_one',
        itemBorderModifier: 'benefits-list__item_border_one',
        title: 'Do not create new object for each request',
        titleBorderModifier: 'benefits-list__title_border_one',
        text: `Send the first query, receive an object and use it further
              to make server requests instead of creating new objects each time.`,
        textPaddingModifier: 'benefits-list__text_padding_one',
        svg: this.oneSvgComponent,
      }
    ];
  }
}