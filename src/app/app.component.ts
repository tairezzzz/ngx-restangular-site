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
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public stars;
  
  
  constructor(
    public mainService: MainService
  ) {
    PageScrollConfig.defaultScrollOffset = 64;
  }
  
  ngOnInit() {
    this.mainService.getStars()
    .subscribe((res) => {
      this.stars = res.stargazers_count;
    });
  }
  
  public toggleSideBar(e) {
    e.stopPropagation();
    this.mainService.isSideBarShow = !this.mainService.isSideBarShow;
  }
  
}


