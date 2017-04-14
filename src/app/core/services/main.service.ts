import { Injectable } from '@angular/core';
import { Restangular } from 'ng2-restangular';

@Injectable()

export class MainService {
  
  public isSideBarShowen: boolean = false;
  
  constructor(
    private restangular: Restangular,
  ) { }
  
  getStars() {
    return this.restangular.all('ng2-restangular').customGET();
  }
  
  
}