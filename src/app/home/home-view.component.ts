import { Component, OnInit, Renderer2, PLATFORM_ID, Inject, ElementRef, ViewChild } from '@angular/core';
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
  
  constructor(
    private http: TransferHttp,
    public mainService: MainService,
    public renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  
  @ViewChild('dataContainer') dataContainer: ElementRef;
  
  ngOnInit() {
    //
    //this.mainService.getReadmeFile().subscribe((res) => {
    //  debugger;
    //  this.dataContainer.nativeElement.innerHTML = res['_body'];
    //});
      if (isPlatformBrowser(this.platformId)) {
        this.mainService.getReadmeFile().subscribe((res) => {
          this.dataContainer.nativeElement.innerHTML = res['_body'];
        });
      }
    if (isPlatformServer(this.platformId)) {
      this.mainService.getReadmeFileServ().subscribe((r) => {
        this.dataContainer.nativeElement.innerHTML = r['_body'];
      });
    }
  }
  
}
