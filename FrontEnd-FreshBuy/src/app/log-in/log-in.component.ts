import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  user: string;
  password: string;
  keyPass: boolean;
  userType: String;

  btnClick(htmlUser,htmlPassword){
    this.user = htmlUser;
    this.password = htmlPassword;
    this.comunication();
    if(this.keyPass){
      if(this.userType == "P"){
        this.router.navigateByUrl('/producerView');
      }else if(this.userType == "C"){
        this.router.navigateByUrl('/clientView');
      }else if(this.userType == "A"){
        //alert("Admin");
        this.router.navigateByUrl('/adminView');
      }
      //alert("Usuario: " + this.user + "\n" +
            //"Contraseña: " + this.password + "\n");
    }else{
      //alert(messageError)
    }
    
  };

  public comunication(){
    //AQUÍ SE COMUNICA LA VARA
    this.userType = "A";
    this.keyPass = true;
  }

}
