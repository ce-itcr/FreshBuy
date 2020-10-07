import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserandPass } from '../register/register.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css',
              './../app.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  user: string;
  password: string;
  keyPass: boolean;
  userType: String;
  errorMessage: String;
  userPass: String;

  btnClick(htmlUser,htmlPassword){
    this.user = htmlUser;
    this.password = htmlPassword;
    this.comunication();
    this.userPass = this.findUser(htmlUser);
    this.userType = htmlUser.charAt(htmlUser.length - 1);
    if(this.keyPass && this.userPass != ""){
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
      alert("Usuario: " + this.user + "\n" +
            "Contraseña: " + this.password + "\n");
    }else{
      alert(this.errorMessage);
    }
  };

  public comunication(){
    this.userType = "P";
    this.keyPass = true;
    this.errorMessage = "Error en los datos";
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
