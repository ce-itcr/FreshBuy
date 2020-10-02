import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd-FreshBuy';

  user: string;
  password: string;

  logInData(htmlUser,htmlPassword) {
    this.user = htmlUser;
    this.password = htmlPassword;
    alert("Usuario: " + this.user + "\n" + "Contraseña: " + this.password)
  } 
}
