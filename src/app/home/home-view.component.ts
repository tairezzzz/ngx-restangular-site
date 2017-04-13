import { Component, OnInit } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';

@Component({
	selector: 'main-content',
  templateUrl: 'home-view.component.html',
  styleUrls: [ './home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  //public subs: Observable<string>;

  constructor(private http: TransferHttp) {}

  ngOnInit() {
    //this.subs = this.http.get('http://localhost:8000/data').map(data => {
    //  return `${data.greeting} ${data.name}`;
    //});
  }
  hideSidebar() {
    
  }
}
