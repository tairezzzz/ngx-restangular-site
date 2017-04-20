import { Component, OnInit } from '@angular/core';
import { MainService } from '../core/services/main.service';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'main-content',
  templateUrl: 'home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  public readme$: Observable<any>;
  
  constructor(
    public mainService: MainService,
    private sanitized: DomSanitizer
  ) {
  }
  
  ngOnInit() {
    this.readme$ = this.mainService.getReadmeFile()
    .startWith({'_body': ''})
    .map(res => res['_body'])
    .map(body => {
      // TODO fix markdown in backend
      let re = /(<p>`<\/p>|`\n)/gi;
      return body.replace(re, '');
    })
    .map(body => {
      return this.sanitized.bypassSecurityTrustHtml(body);
    })
  }
}
