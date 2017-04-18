import { Component, OnInit, Renderer2 } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { MainService } from '../core/services/main.service';
import { elementAt } from 'rxjs/operator/elementAt';

@Component({
	selector: 'main-content',
  templateUrl: 'home-view.component.html',
  styleUrls: [ './home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  public readme = '';

  
  constructor(
    private http: TransferHttp,
    public mainService: MainService,
    public renderer: Renderer2
  ) {}

  ngOnInit() {
    this.mainService.getReadmeFile().subscribe((res) => {
      debugger;
      this.readme = atob(res.content);
      console.log(this.readme);
      //this.renderer.setStyle(element, 'background-color', 'red');
    })

    
  }
  //render(element) {
  //    this.renderer.setStyle(element, 'background-color', 'red');
  //
  //}
  
}
