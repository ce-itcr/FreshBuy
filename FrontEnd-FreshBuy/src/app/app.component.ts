import { Component } from '@angular/core';
import { ComunicationService } from './comunication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ComunicationService]
})
export class AppComponent {
  title = 'FrontEnd-FreshBuy';
  constructor(private data_Service: ComunicationService) { }

  ngOnInit(): void {
    //this.data_Service.getAll().subscribe(res => console.log("RES", res));
    //this.data_Service.postTest().subscribe(res => console.log("RES", res));
  }

}
