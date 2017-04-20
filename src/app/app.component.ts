import { Component, OnInit } from '@angular/core'
import { PageScrollConfig } from 'ng2-page-scroll';
import { Injectable } from '@angular/core';
import { MainService } from './core/services/main.service';

Injectable();

@Component({
  selector: 'restangular-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public stars;
  public stars$;
  
  constructor(
    public mainService: MainService
  ) {
    PageScrollConfig.defaultScrollOffset = 64;
  }
  
  ngOnInit() {
    this.stars$ = this.mainService.getStars()
    .subscribe((res) => {
      this.stars = res.stargazers_count;
    });
  }
  
  ngOnDestroy() {
    this.stars$.unsubscribe();
  }
  
  public toggleSideBar(e) {
    e.stopPropagation();
    this.mainService.isSideBarShow = !this.mainService.isSideBarShow;
  }
  
}


