import { Component, OnInit, ViewChild, ElementRef, Renderer2, PLATFORM_ID } from '@angular/core'
import { TransferState } from '../modules/transfer-state/transfer-state';
import { PageScrollService, PageScrollInstance, PageScrollConfig } from 'ng2-page-scroll';
import { Inject, Injectable } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { MainService } from './core/services/main.service';

Injectable();

@Component({
	selector: 'restangular-app',
    templateUrl: './app.component.html',
    styleUrls: [/*'../../node_modules/materialize-css/dist/css/materialize.css',*/ './app.component.css']
})

export class AppComponent implements OnInit {
    public stars;
    
    constructor(
        private cache: TransferState,
        @Inject(PLATFORM_ID) private platformId: Object,
        //private pageScrollService: PageScrollService,
        @Inject(DOCUMENT) private document: any,
        private renderer:Renderer2,
        public mainService: MainService
    ) {
        PageScrollConfig.defaultScrollOffset = 64;
    }

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
        this.mainService.getStars().subscribe((res) => {
                this.stars = res.stargazers_count;
            });
        }
        this.cache.set('cached', true);

        
    }
    
    public sideBar(e) {
        e.stopPropagation();
        if (this.mainService.isSideBarShowen) {
            this.mainService.isSideBarShowen = false;
        } else {
            this.mainService.isSideBarShowen = true;
        }
    }

}


