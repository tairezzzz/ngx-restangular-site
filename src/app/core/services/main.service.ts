import { Injectable } from '@angular/core';
import { Restangular } from 'ng2-restangular';

@Injectable()

export class MainService {
  
  public isSideBarShowen: boolean = false;
  
  constructor(
    private restangular: Restangular,
  ) { }
  
  getStars() {
    return this.restangular.all('ngx-restangular').customGET();
  }
  getReadmeFile() {
    debugger;
    return this.restangular.all('ngx-restangular').all('readme').customGET();
  }

}