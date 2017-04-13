import { Component, OnInit, ViewChild, ElementRef, Renderer2, PLATFORM_ID } from '@angular/core'
import { TransferState } from '../modules/transfer-state/transfer-state';
import { PageScrollService, PageScrollInstance, PageScrollConfig } from 'ng2-page-scroll';
import { Inject, Injectable } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
	selector: 'restangular-app',
    templateUrl: './app.component.html',
    //host: {
    //    '(document:click)': 'handleClick($event)',
    //},
    styleUrls: [/*'../../node_modules/materialize-css/dist/css/materialize.css',*/ './app.component.css']
})
export class AppComponent implements OnInit {
    
    private isSideBarShowen = false;
    //public elementRef;
    
    constructor(
        private cache: TransferState,
        @Inject(PLATFORM_ID) private platformId: Object,
        //private pageScrollService: PageScrollService,
        @Inject(DOCUMENT) private document: any,
        private renderer:Renderer2,
        //public myElement: ElementRef
    ) {
        PageScrollConfig.defaultScrollOffset = 64;
        //this.elementRef = myElement;
    }

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            
        }
        this.cache.set('cached', true);
    }
    
    public sideBar() {
        if (this.isSideBarShowen) {
            this.isSideBarShowen = false;
        } else {
            this.isSideBarShowen = true;
        }
    }
    
    //handleClick(event){
    //    debugger;
    //    let clickedComponent = event.target;
    //    let inside = false;
    //    do {
    //        if (clickedComponent === this.elementRef.nativeElement) {
    //            inside = true;
    //        }
    //        clickedComponent = clickedComponent.parentNode;
    //    } while (clickedComponent);
    //    if(inside){
    //        console.log('inside');
    //    }else{
    //        console.log('outside');
    //    }
    //};
    

}


