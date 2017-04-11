import { Component, OnInit } from '@angular/core'
import { TransferState } from '../modules/transfer-state/transfer-state';

@Component({
	selector: 'demo-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
                    children:[]
                },
                {
                    title:'Configuring Restangular',
                    inputName: 'Level-2',
                    link:'user-content-configuring-restangular',
                    children:[]
                },
                {
                    title:'Methods description',
                    inputName: 'Level-2',
                    link:'user-content-methods-description',
                    children:[]
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
                    children:[]
                },
                {
                    title:'Adding Custom Methods to Models',
                    inputName: 'Level-2',
                    link:'user-content-adding-custom-methods-to-models',
                    children:[]
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

    constructor(private cache: TransferState) {}
    ngOnInit() {
    this.cache.set('cached', true);
    }

    doActive(){

    }


}
