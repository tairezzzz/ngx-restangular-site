import { Component, OnInit, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { MainService } from '../core/services/main.service';
import { elementAt } from 'rxjs/operator/elementAt';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
	selector: 'main-content',
  templateUrl: 'home-view.component.html',
  styleUrls: [ './home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  public readme = '';
  public displayBrowser: boolean;
  
  constructor(
    private http: TransferHttp,
    public mainService: MainService,
    public renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.mainService.getReadmeFile().subscribe((res) => {
      debugger;
    });
    
      if (isPlatformBrowser(this.platformId)) {
        //this.mainService.getReadmeFile().subscribe((res) => {
        //  debugger;
        //  this.readme = atob(res.content);
        //  this.displayBrowser = true;
        //  console.log(this.readme);
        //})
      }
    if (isPlatformServer(this.platformId)) {
      this.displayBrowser = false;
    }
  }
  
}
