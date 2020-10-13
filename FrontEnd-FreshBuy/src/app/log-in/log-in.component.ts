import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicationService } from '../comunication.service';
import { update_producers } from '../logic';

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
  userType: string;

  loginAction(username, password){
    this.user = username;
    this.password = password;
    this.sendData();

    //this.router.navigateByUrl('/producerManagement');

  }

  verify_user_type(username, password, user_type){
    this.user = username;
    this.password = password;
    this.userType = user_type;

    switch (user_type) {
      case "Admin":
        this.verify_admin_login();
        break;
      case "Productor":
        this.verify_producer_login();
        break;
      case "Consumidor":
        this.verify_consumer_login();
        break;

      default:
        this.verify_admin_login();
        break;
    }
  }

  verify_admin_login(){
    return this.http.post<JSON>("api/Login/Admin/consult",
    {"username": this.user.toString(), "password": this.password.toString()}).subscribe(res => {
      console.log("RES", res);
      update_producers(this.router,this.CS);
     }, error => {
      alert("Nombre de usuario o contraseña incorrectos.");
    });
  }

  verify_producer_login(){
    return this.http.post<JSON>("api/Login/Producer/consult",
    {"username": this.user.toString(), "password": this.password.toString()}).subscribe(res => {
      console.log("RES", res);
      this.router.navigateByUrl('/productsManagement');
     }, error => {
      alert("Nombre de usuario o contraseña incorrectos.");
    });
  }

  verify_consumer_login(){
    return this.http.post<JSON>("api/Login/Consumer/consult",
    {"username": this.user.toString(), "password": this.password.toString()}).subscribe(res => {
      console.log("RES", res);
      this.router.navigateByUrl('/clientView');
     }, error => {
      alert("Nombre de usuario o contraseña incorrectos.");
    });
  }

  //SEND DATA
  sendData(){
    this.CS.sendData(this.user,this.password).subscribe(res => {
      console.log("RES", res);
      this.router.navigateByUrl('/producerManagement');
     }, error => {
       alert("ERROR");
     });
  }
}
