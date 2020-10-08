import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'FrontEnd-FreshBuy';
  constructor(private data_Service: DataService) { }

  ngOnInit(): void {
    //this.data_Service.getAll().subscribe(res => console.log("RES", res));
    this.data_Service.postTest().subscribe(res => console.log("RES", res));
  }

}
