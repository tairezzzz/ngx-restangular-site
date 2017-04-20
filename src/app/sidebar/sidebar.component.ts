import { Component, OnInit, Inject, ElementRef, PLATFORM_ID, Input } from '@angular/core';

import { PageScrollService, PageScrollInstance, PageScrollConfig } from 'ng2-page-scroll';

import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { MainService } from '../core/services/main.service';

@Component({
  selector: 'sidebar',
  host: {
    '(document:click)': 'handleClick($event)',
  },
  templateUrl: 'sidebar.component.html',
  styleUrls: [ './sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  public menu:any = [
    {
      title:'How do I add this to my project in angular 2?',
      inputName:'Level-1',
      link:'how-do-i-add-this-to-my-project-in-angular-2',
      children:[]
    },
    {
      title:'How do I add this to my project in angular 4?',
      inputName:'Level-1',
      link:'how-do-i-add-this-to-my-project-in-angular-4',
      children:[]
    },
    {
      title:'Dependencies',
      inputName: 'Level-1',
      link:'dependencies',
      children:[]
    },
    {
      title:'Starter Guide',
      inputName: 'Level-1',
      link:'starter-guide',
      children:[
        {
          title:'Quick configuration for Lazy Readers',
          inputName: 'Level-2',
          link:'quick-configuration-for-lazy-readers',
          children:[]
        },
        {
          title:'Using Restangular',
          inputName: 'Level-2',
          link:'using-restangular',
          children:[
            {
              title:'Creating Main Restangular object',
              inputName: 'Level-3',
              link:'creating-main-restangular-object',
              children:[]
            },
            {
              title:'Lets Code with Observables!',
              inputName: 'Level-3',
              link:'lets-code-with-observables',
              children:[]
            },
            {
              title:'Here is Example of code with using promises!',
              inputName: 'Level-3',
              link:'here-is-example-of-code-with-using-promises',
              children:[]
            },
          
          ]
        },
        {
          title:'Configuring Restangular',
          inputName: 'Level-2',
          link:'configuring-restangular',
          children:[
            {
              title:'Properties',
              inputName: 'Level-3',
              link:'properties',
              children:[
                {
                  title:'withConfig',
                  inputName: 'Level-4',
                  link:'withconfig',
                  children:[]
                },
                {
                  title:'setBaseUrl',
                  inputName: 'Level-4',
                  link:'setbaseurl',
                  children:[]
                },
                {
                  title:'setExtraFields',
                  inputName: 'Level-4',
                  link: 'setextrafields',
                  children:[]
                },
                {
                  title:'setParentless',
                  inputName: 'Level-4',
                  link:'setparentless',
                  children:[]
                },
                {
                  title:'addElementTransformer',
                  inputName: 'Level-4',
                  link:'addelementtransformer',
                  children:[]
                },
                {
                  title:'setTransformOnlyServerElements',
                  inputName: 'Level-4',
                  link:'settransformonlyserverelements',
                  children:[]
                },
                {
                  title:'setOnElemRestangularized',
                  inputName: 'Level-4',
                  link:'setonelemrestangularized',
                  children:[]
                },
                {
                  title:'addResponseInterceptor',
                  inputName: 'Level-4',
                  link:'addresponseinterceptor',
                  children:[]
                },
                {
                  title:'addFullRequestInterceptor',
                  inputName: 'Level-4',
                  link:'addfullrequestinterceptor',
                  children:[]
                },
                {
                  title:'addErrorInterceptor',
                  inputName: 'Level-4',
                  link:'adderrorinterceptor',
                  children:[]
                },
                {
                  title:'setRestangularFields',
                  inputName: 'Level-4',
                  link:'setrestangularfields',
                  children:[]
                },
                {
                  title:'setMethodOverriders',
                  inputName: 'Level-4',
                  link:'setmethodoverriders',
                  children:[]
                },
                {
                  title:'setDefaultRequestParams',
                  inputName: 'Level-4',
                  link:'setdefaultrequestparams',
                  children:[]
                },
                {
                  title:'setFullResponse',
                  inputName: 'Level-4',
                  link:'setfullresponse',
                  children:[]
                },
                {
                  title:'setDefaultHeaders',
                  inputName: 'Level-4',
                  link:'setdefaultheaders',
                  children:[]
                },
                {
                  title:'setRequestSuffix',
                  inputName: 'Level-4',
                  link:'setrequestsuffix',
                  children:[]
                },
                {
                  title:'setUseCannonicalId',
                  inputName: 'Level-4',
                  link:'setusecannonicalid',
                  children:[]
                },
                {
                  title:'setPlainByDefault',
                  inputName: 'Level-4',
                  link:'setplainbydefault',
                  children:[]
                },
                {
                  title:'setEncodeIds',
                  inputName: 'Level-4',
                  link:'setencodeids',
                  children:[]
                },
              ]
            },
            {
              title:'Accessing configuration',
              inputName: 'Level-3',
              link:'accessing-configuration',
              children:[]
            },
            {
              title:'How to configure them globally',
              inputName: 'Level-3',
              link:'how-to-configure-them-globally',
              children:[
                {
                  title:'Configuring in the AppModule',
                  inputName: 'Level-4',
                  link:'configuring-in-the-appmodule',
                  children:[]
                },
                {
                  title:'Configuring in the AppModule with Dependency Injection applied',
                  inputName: 'Level-4',
                  link:'configuring-in-the-appmodule-with-dependency-injection-applied',
                  children:[]
                },
              
              ]
            },
            {
              title:'How to create a Restangular service with a different configuration from the global one',
              inputName: 'Level-3',
              link:'how-to-create-a-restangular-service-with-a-different-configuration-from-the-global-one',
              children:[]
            },
            {
              title:'Decoupled Restangular Service',
              inputName: 'Level-3',
              link:'decoupled-restangular-service',
              children:[]
            },
          ]
        },
        {
          title:'Methods description',
          inputName: 'Level-2',
          link:'methods-description',
          children:[
            {
              title:'Restangular methods',
              inputName: 'Level-3',
              link:'restangular-methods',
              children:[]
            },
            {
              title:'Element methods',
              inputName: 'Level-3',
              link:'element-methods',
              children:[]
            },
            {
              title:'Collection methods',
              inputName: 'Level-3',
              link:'collection-methods',
              children:[]
            },
            {
              title:'Custom methods',
              inputName: 'Level-3',
              link:'custom-methods',
              children:[]
            },
          
          ]
        },
        {
          title:'Copying elements',
          inputName: 'Level-2',
          link:'copying-elements',
          children:[]
        },
        {
          title:'Using values directly in templates with Observables',
          inputName: 'Level-2',
          link:'using-values-directly-in-templates-with-observables',
          children:[]
        },
        {
          title:'URL Building',
          inputName: 'Level-2',
          link:'url-building',
          children:[]
        },
        {
          title:'Creating new Restangular Methods',
          inputName: 'Level-2',
          link:'creating-new-restangular-methods',
          children:[]
        },
        {
          title:'Adding Custom Methods to Collections',
          inputName: 'Level-2',
          link:'adding-custom-methods-to-collections',
          children:[
            {
              title:'Example:',
              inputName: 'Level-3',
              link:'example',
              children:[]
            },
          ]
        },
        {
          title:'Adding Custom Methods to Models',
          inputName: 'Level-2',
          link:'adding-custom-methods-to-models',
          children:[
            {
              title:'Example:',
              inputName: 'Level-3',
              link:'example-1',
              children:[]
            },
          ]
        },
      ]
    },
    {
      title:'FAQ',
      inputName: 'Level-1',
      link:'faq',
      children:[
        {
          title:'How can I handle errors?',
          inputName: 'Level-2',
          link:'how-can-i-handle-errors',
          children:[]
        },
        {
          title:'I need to send Authorization token in EVERY Restangular request, how can I do this?',
          inputName: 'Level-2',
          link:'i-need-to-send-authorization-token-in-every-restangular-request-how-can-i-do-this',
          children:[]
        },
        {
          title:'I need to send one header in EVERY Restangular request, how can I do this?',
          inputName: 'Level-2',
          link:'i-need-to-send-one-header-in-every-restangular-request-how-can-i-do-this',
          children:[]
        },
        {
          title:'How can I send a delete WITHOUT a body?',
          inputName: 'Level-2',
          link:'how-can-i-send-a-delete-without-a-body',
          children:[]
        },
        {
          title:'I use Mongo and the ID of the elements is _id not id as the default. Therefore requests are sent to undefined routes',
          inputName: 'Level-2',
          link:'i-use-mongo-and-the-id-of-the-elements-is-_id-not-id-as-the-default-therefore-requests-are-sent-to-undefined-routes',
          children:[]
        },
        {
          title:'What if each of my models has a different ID name like CustomerID for Customer',
          inputName: 'Level-2',
          link:'what-if-each-of-my-models-has-a-different-id-name-like-customerid-for-customer',
          children:[]
        },
        {
          title:'How can I send files in my request using Restangular?',
          inputName: 'Level-2',
          link:'how-can-i-send-files-in-my-request-using-restangular',
          children:[]
        },
        {
          title:'How do I handle CRUD operations in a List returned by Restangular?',
          inputName: 'Level-2',
          link:'how-do-i-handle-crud-operations-in-a-list-returned-by-restangular',
          children:[]
        },
        {
          title:'Removing an element from a collection, keeping the collection restangularized',
          inputName: 'Level-2',
          link:'removing-an-element-from-a-collection-keeping-the-collection-restangularized',
          children:[]
        },
        {
          title:'How can I access the unrestangularized element as well as the restangularized one?',
          inputName: 'Level-2',
          link:'how-can-i-access-the-unrestangularized-element-as-well-as-the-restangularized-one',
          children:[]
        },
        {
          title:'How can add withCredentials params to requests?',
          inputName: 'Level-2',
          link:'how-can-add-withcredentials-params-to-requests',
          children:[]
        }
      ]
    },
    {
      title:'Server Frameworks',
      inputName: 'Level-1',
      link:'server-frameworks',
      children:[]
    },
    {
      title:'License',
      inputName: 'Level-1',
      link:'license',
      children:[]
    }
  ];
  
  public elementRef;
  
  constructor(
    private pageScrollService: PageScrollService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: any,
    public myElement: ElementRef,
    public mainService: MainService
  ) {
    PageScrollConfig.defaultScrollOffset = 64;
    this.elementRef = myElement;
  }
  
  ngOnInit() {
    
  }
  
  public goToHead(target, children): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, target);
    this.pageScrollService.start(pageScrollInstance);
  };
  
  handleClick(event){
    let clickedComponent = event.target;
    let inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if(inside){
      this.mainService.isSideBarShow = true;
    }else{
      this.mainService.isSideBarShow = false;
    }
  };
}