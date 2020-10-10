import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserandPass } from '../register/register.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css',
              './../app.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  user: string;
  password: string;
  keyPass: boolean;
  userType: String;
  errorMessage: String;
  userPass: String;
  error: String;

  btnClick(htmlUser,htmlPassword){

    this.user = htmlUser;
    this.password = htmlPassword;

    this.sendData();

    if(this.error == "TRUE"){
      alert("username: " + this.user + "\n" +
          "password: " + this.password + "\n");
      this.userPass = this.findUser(htmlUser);
      this.userType = htmlUser.charAt(htmlUser.length - 1);
      if(this.userType == "P" && this.password === this.userPass){
        this.router.navigateByUrl('/productsManagement');
        this.userPass = "";
      }else if(this.userType == "C" && this.password === this.userPass){
        this.router.navigateByUrl('/clientView');
        this.userPass = "";
      }else if(this.userType == "A" && this.password === this.userPass){
        this.router.navigateByUrl('/producerManagement');
        this.userPass = "";
      }
    }else{
      alert("Error");
    }
  };

  loginAction(username, password){
    this.user = username;
    this.password = password;
    this.sendData();

    //this.router.navigateByUrl('/producerManagement');

  }


  //SEND USER DATA TO API
  public sendData(){
    return this.http.post<JSON>("api/Login/Consumer/consult",
     {"username": this.user.toString(), "password": this.password.toString()}).subscribe(res => {
       console.log("RES", res);
       this.router.navigateByUrl('/producerManagement');
      });
  }


  private findUser(user){
    for(var i = 0; i < UserandPass.length; i++){
      if(UserandPass[i][0] = user){
          return UserandPass[i][1];
      }
    }
    return "";
  }
}
