import { Inject, Injectable } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import { Http } from '@angular/http';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()

export class MainService {
  
  public isSideBarShow: boolean = false;
  
  constructor(
    private restangular: Restangular,
    private http: Http,
    @Inject(DOCUMENT) private document
  ) {
  }
  
  getStars() {
    return this.restangular.all('ngx-restangular').customGET();
  }
  
  getReadmeFile(): any {
    let location = this.document.location;
    let port = location? location.port : process.env.PORT;
    
    return this.http.get(`http://localhost:${port}/assets/readme`);
  }
}