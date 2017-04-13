import { Component, OnInit, Inject, ElementRef, PLATFORM_ID, Input } from '@angular/core';

import { PageScrollService, PageScrollInstance, PageScrollConfig } from 'ng2-page-scroll';

import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
//import { isSideBarShowen } from './app.module';
@Component({
  selector: 'sidebar',
  host: {
    '(document:click)': 'handleClick($event)',
  },
  templateUrl: 'sidebar.component.html',
  styleUrls: [ './sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  private menu:any = [
    {
      title:'How do I add this to my project in angular 2?',
      inputName:'Level-1',
      link:'user-content-how-do-i-add-this-to-my-project-in-angular-2',
      children:[]
    },
    {
      title:'How do I add this to my project in angular 4?',
      inputName:'Level-1',
      link:'user-content-how-do-i-add-this-to-my-project-in-angular-4',
      children:[]
    },
    {
      title:'Dependencies',
      inputName: 'Level-1',
      link:'user-content-dependencies',
      children:[]
    },
    {
      title:'Starter Guide',
      inputName: 'Level-1',
      link:'user-content-starter-guide',
      children:[
        {
          title:'Quick configuration for Lazy Readers',
          inputName: 'Level-2',
          link:'user-content-quick-configuration-for-lazy-readers',
          children:[]
        },
        {
          title:'Using Restangular',
          inputName: 'Level-2',
          link:'user-content-using-restangular',
          children:[
            {
              title:'Creating Main Restangular object',
              inputName: 'Level-3',
              link:'user-content-creating-main-restangular-object',
              children:[]
            },
            {
              title:'Lets Code with Observables!',
              inputName: 'Level-3',
              link:'user-content-lets-code-with-observables',
              children:[]
            },
            {
              title:'Here is Example of code with using promises!',
              inputName: 'Level-3',
              link:'user-content-here-is-example-of-code-with-using-promises',
              children:[]
            },
          
          ]
        },
        {
          title:'Configuring Restangular',
          inputName: 'Level-2',
          link:'user-content-configuring-restangular',
          children:[
            {
              title:'Properties',
              inputName: 'Level-3',
              link:'user-content-properties',
              children:[
                {
                  title:'withConfig',
                  inputName: 'Level-4',
                  link:'user-content-withconfig',
                  children:[]
                },
                {
                  title:'setBaseUrl',
                  inputName: 'Level-4',
                  link:'user-content-setbaseurl',
                  children:[]
                },
                {
                  title:'setExtraFields',
                  inputName: 'Level-4',
                  link: 'user-content-setextrafields',
                  children:[]
                },
                {
                  title:'setParentless',
                  inputName: 'Level-4',
                  link:'user-content-setparentless',
                  children:[]
                },
                {
                  title:'addElementTransformer',
                  inputName: 'Level-4',
                  link:'user-content-addelementtransformer',
                  children:[]
                },
                {
                  title:'setTransformOnlyServerElements',
                  inputName: 'Level-4',
                  link:'user-content-settransformonlyserverelements',
                  children:[]
                },
                {
                  title:'setOnElemRestangularized',
                  inputName: 'Level-4',
                  link:'user-content-setonelemrestangularized',
                  children:[]
                },
                {
                  title:'addResponseInterceptor',
                  inputName: 'Level-4',
                  link:'user-content-addresponseinterceptor',
                  children:[]
                },
                {
                  title:'addFullRequestInterceptor',
                  inputName: 'Level-4',
                  link:'user-content-addfullrequestinterceptor',
                  children:[]
                },
                {
                  title:'addErrorInterceptor',
                  inputName: 'Level-4',
                  link:'user-content-adderrorinterceptor',
                  children:[]
                },
                {
                  title:'setRestangularFields',
                  inputName: 'Level-4',
                  link:'user-content-setrestangularfields',
                  children:[]
                },
                {
                  title:'setMethodOverriders',
                  inputName: 'Level-4',
                  link:'user-content-setmethodoverriders',
                  children:[]
                },
                {
                  title:'setDefaultRequestParams',
                  inputName: 'Level-4',
                  link:'user-content-setdefaultrequestparams',
                  children:[]
                },
                {
                  title:'setFullResponse',
                  inputName: 'Level-4',
                  link:'user-content-setfullresponse',
                  children:[]
                },
                {
                  title:'setDefaultHeaders',
                  inputName: 'Level-4',
                  link:'user-content-setdefaultheaders',
                  children:[]
                },
                {
                  title:'setRequestSuffix',
                  inputName: 'Level-4',
                  link:'user-content-setrequestsuffix',
                  children:[]
                },
                {
                  title:'setUseCannonicalId',
                  inputName: 'Level-4',
                  link:'user-content-setusecannonicalid',
                  children:[]
                },
                {
                  title:'setPlainByDefault',
                  inputName: 'Level-4',
                  link:'user-content-setplainbydefault',
                  children:[]
                },
                {
                  title:'setEncodeIds',
                  inputName: 'Level-4',
                  link:'user-content-setencodeids',
                  children:[]
                },
              ]
            },
            {
              title:'Accessing configuration',
              inputName: 'Level-3',
              link:'user-content-accessing-configuration',
              children:[]
            },
            {
              title:'How to configure them globally',
              inputName: 'Level-3',
              link:'user-content-how-to-configure-them-globally',
              children:[
                {
                  title:'Configuring in the AppModule',
                  inputName: 'Level-4',
                  link:'user-content-configuring-in-the-appmodule',
                  children:[]
                },
                {
                  title:'Configuring in the AppModule with Dependency Injection applied',
                  inputName: 'Level-4',
                  link:'user-content-configuring-in-the-appmodule-with-dependency-injection-applied',
                  children:[]
                },
              
              ]
            },
            {
              title:'How to create a Restangular service with a different configuration from the global one',
              inputName: 'Level-3',
              link:'user-content-how-to-create-a-restangular-service-with-a-different-configuration-from-the-global-one',
              children:[]
            },
            {
              title:'Decoupled Restangular Service',
              inputName: 'Level-3',
              link:'user-content-decoupled-restangular-service',
              children:[]
            },
          ]
        },
        {
          title:'Methods description',
          inputName: 'Level-2',
          link:'user-content-methods-description',
          children:[
            {
              title:'Restangular methods',
              inputName: 'Level-3',
              link:'user-content-restangular-methods',
              children:[]
            },
            {
              title:'Element methods',
              inputName: 'Level-3',
              link:'user-content-element-methods',
              children:[]
            },
            {
              title:'Collection methods',
              inputName: 'Level-3',
              link:'user-content-collection-methods',
              children:[]
            },
            {
              title:'Custom methods',
              inputName: 'Level-3',
              link:'user-content-custom-methods',
              children:[]
            },
          
          ]
        },
        {
          title:'Copying elements',
          inputName: 'Level-2',
          link:'user-content-copying-elements',
          children:[]
        },
        {
          title:'Using values directly in templates with Observables',
          inputName: 'Level-2',
          link:'user-content-using-values-directly-in-templates-with-observables',
          children:[]
        },
        {
          title:'URL Building',
          inputName: 'Level-2',
          link:'user-content-url-building',
          children:[]
        },
        {
          title:'Creating new Restangular Methods',
          inputName: 'Level-2',
          link:'user-content-creating-new-restangular-methods',
          children:[]
        },
        {
          title:'Adding Custom Methods to Collections',
          inputName: 'Level-2',
          link:'user-content-adding-custom-methods-to-collections',
          children:[
            {
              title:'Example:',
              inputName: 'Level-3',
              link:'user-content-example',
              children:[]
            },
          ]
        },
        {
          title:'Adding Custom Methods to Models',
          inputName: 'Level-2',
          link:'user-content-adding-custom-methods-to-models',
          children:[
            {
              title:'Example:',
              inputName: 'Level-3',
              link:'user-content-example-1',
              children:[]
            },
          ]
        },
      ]
    },
    {
      title:'FAQ',
      inputName: 'Level-1',
      link:'user-content-faq',
      children:[
        {
          title:'How can I handle errors?',
          inputName: 'Level-2',
          link:'user-content-how-can-i-handle-errors',
          children:[]
        },
        {
          title:'I need to send Authorization token in EVERY Restangular request, how can I do this?',
          inputName: 'Level-2',
          link:'user-content-i-need-to-send-authorization-token-in-every-restangular-request-how-can-i-do-this',
          children:[]
        },
        {
          title:'I need to send one header in EVERY Restangular request, how can I do this?',
          inputName: 'Level-2',
          link:'user-content-i-need-to-send-one-header-in-every-restangular-request-how-can-i-do-this',
          children:[]
        },
        {
          title:'How can I send a delete WITHOUT a body?',
          inputName: 'Level-2',
          link:'user-content-how-can-i-send-a-delete-without-a-body',
          children:[]
        },
        {
          title:'I use Mongo and the ID of the elements is _id not id as the default. Therefore requests are sent to undefined routes',
          inputName: 'Level-2',
          link:'user-content-i-use-mongo-and-the-id-of-the-elements-is-_id-not-id-as-the-default-therefore-requests-are-sent-to-undefined-routes',
          children:[]
        },
        {
          title:'What if each of my models has a different ID name like CustomerID for Customer',
          inputName: 'Level-2',
          link:'user-content-what-if-each-of-my-models-has-a-different-id-name-like-customerid-for-customer',
          children:[]
        },
        {
          title:'How can I send files in my request using Restangular?',
          inputName: 'Level-2',
          link:'user-content-how-can-i-send-files-in-my-request-using-restangular',
          children:[]
        },
        {
          title:'How do I handle CRUD operations in a List returned by Restangular?',
          inputName: 'Level-2',
          link:'user-content-how-do-i-handle-crud-operations-in-a-list-returned-by-restangular',
          children:[]
        },
        {
          title:'Removing an element from a collection, keeping the collection restangularized',
          inputName: 'Level-2',
          link:'user-content-removing-an-element-from-a-collection-keeping-the-collection-restangularized',
          children:[]
        },
        {
          title:'How can I access the unrestangularized element as well as the restangularized one?',
          inputName: 'Level-2',
          link:'user-content-how-can-i-access-the-unrestangularized-element-as-well-as-the-restangularized-one',
          children:[]
        },
        {
          title:'How can add withCredentials params to requests?',
          inputName: 'Level-2',
          link:'user-content-how-can-add-withcredentials-params-to-requests',
          children:[]
        }
      ]
    },
    {
      title:'Server Frameworks',
      inputName: 'Level-1',
      link:'user-content-server-frameworks',
      children:[]
    },
    {
      title:'License',
      inputName: 'Level-1',
      link:'user-content-license',
      children:[]
    }
  ];
  
  public elementRef;
  
  @Input() isSideBarShowen;
  
  constructor(
    private pageScrollService: PageScrollService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: any,
    public myElement: ElementRef
  ) {
    PageScrollConfig.defaultScrollOffset = 64;
    this.elementRef = myElement;
  }
  
  ngOnInit() {

  }
  
  public goToHead(target, children): void {
    if (isPlatformBrowser(this.platformId)) {
      let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, target);
      this.pageScrollService.start(pageScrollInstance);
    }
  };
  
  handleClick(event){
    debugger;
   console.log(this.isSideBarShowen);
    let clickedComponent = event.target;
    let inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if(inside){
      this.isSideBarShowen = true;
      console.log('inside');
    }else{
      this.isSideBarShowen = false;
      console.log('outside');
    }
  };
}