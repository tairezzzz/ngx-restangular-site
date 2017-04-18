import { Injectable } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import { Http } from '@angular/http';

@Injectable()

export class MainService {
  
  public isSideBarShowen: boolean = false;
  
  constructor(
    private restangular: Restangular,
    private http: Http
  ) { }
  
  getStars() {
    return this.restangular.all('ngx-restangular').customGET();
  }
  getReadmeFile() {
    return this.http.get('http://localhost:8000/readme');
    //return this.restangular.all('ngx-restangular').all('readme').customGET();
  }

}