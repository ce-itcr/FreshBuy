import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProducerManagementComponent } from '../administration-view/producer-management/producer-management.component';
import { ComunicationService } from '../comunication.service';
import { update_producers } from '../logic';
import { update_products_for_producer } from '../logic';
import { ProductsManagementComponent } from '../producer-view/products-management/products-management.component';

declare global {
  var storedUsername:string;
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css',
              './../app.component.css']
})

export class LogInComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private CS: ComunicationService) { }
  producerList: any[] = [];
  categoryList: any[] = [];

  ngOnInit(): void {
  }

  user: string;
  password: string;
  userType: string;

  //SE ENCARGA DE VERIFICAR EL TIPO DE USUARIO E INTENTAR UN LOG-IN DEL EN ESE TIPO DE USUARIO
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

  //INTENTA LOG-IN PARA ADMINISTRADOR
  verify_admin_login(){
    return this.http.post<JSON>("api/Login/Admin/consult",
    {"username": this.user.toString(), "password": this.password.toString()}).subscribe(res => {
      console.log("RES", res);
      update_producers(this.router,this.CS);
     }, error => {
      alert("Nombre de usuario o contraseña incorrectos.");
    });
  }

  //INTENTA LOG-IN PARA PRODUCTOR
  verify_producer_login(){
    return this.http.post<JSON>("api/Login/Producer/consult",
    {"username": this.user.toString(), "password": this.password.toString()}).subscribe(res => {
      localStorage.clear();
      localStorage.setItem("user",this.user);
      update_products_for_producer(this.CS, this.router);
     }, error => {
      alert("Nombre de usuario o contraseña incorrectos.");
    });
  }

  //INTENTA LOG-IN PARA CONSUMIDOR
  verify_consumer_login(){
    return this.http.post<JSON>("api/Login/Consumer/consult",
    {"username": this.user.toString(), "password": this.password.toString()}).subscribe(res => {
      console.log("RES", res);
      this.router.navigateByUrl('/clientView');
     }, error => {
      alert("Nombre de usuario o contraseña incorrectos.");
    });
  }
}

