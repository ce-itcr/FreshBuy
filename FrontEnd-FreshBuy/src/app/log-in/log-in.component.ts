import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user: string;
  password: string;

  logInData(htmlUser,htmlPassword) {
    this.user = htmlUser;
    this.password = htmlPassword;
    alert("Usuario: " + this.user + "\n" + "Contraseña: " + this.password)
  } 


}
