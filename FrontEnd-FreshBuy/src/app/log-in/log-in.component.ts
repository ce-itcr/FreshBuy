import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ComunicationService } from '../comunication.service';
import { UserandPass } from '../register/register.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css',
              './../app.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private CS: ComunicationService) { }

  ngOnInit(): void {
  }

  user: string;
  password: string;

  loginAction(username, password){
    this.user = username;
    this.password = password;
    this.sendData();

    //this.router.navigateByUrl('/producerManagement');

  }

  //SEND DATA
  sendData(){
    this.CS.sendData(this.user,this.password).subscribe(res => {
      console.log("RES", res);
      this.router.navigateByUrl('/producerManagement');
     }, error => {
       alert("ERROR");
     })
  }

}
