import { Component, OnInit } from '@angular/core';
import { UserandPass, isNumber, isEmail} from '../../register/register.component';
import { ComunicationService } from 'src/app/comunication.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css',
  './../../app.component.css']
})
export class ClientComponent implements OnInit {

  ID;
  fName;
  lName;
  province;
  canton;
  district;
  email;
  username;
  password;

  constructor(private http: HttpClient, private CS: ComunicationService, private router: Router) { }

  ngOnInit(): void {
  }

  public registerData(hID, hFirstName, hLastName, hProvince, hCanton,
                      hDistrict, hEmail, username, hPassword){

  this.ID = isNumber(hID,9);
  this.fName = hFirstName;
  this.lName = hLastName;
  this.province = hProvince;
  this.canton = hCanton;
  this.district = hDistrict;
  this.email = isEmail(hEmail);
  this.username = username;
  this.password = hPassword;

  if(this.ID !== "Error" && this.email !== "Error"){
    this.post_new_consumer();
  }


  alert("ID: " + this.ID + "\n" +
          "Nombre: " + this.fName + "\n" +
          "Apellido: " + this.lName + "\n" +
          "Provincia: " + this.province + "\n" +
          "Canton: " + this.canton + "\n" +
          "Distrito: " + this.district + "\n" +
          "email: " + this.email + "\n" +
          "Nombre de Usuario" + "\n" +
          "Contraseña: " + this.password + "\n");
    //UserandPass.push([this.ID + "C",this.password]);
    //alert(UserandPass);

  }

  post_new_consumer(){
    this.CS.sendConsumerData(this.ID,this.fName,this.lName,this.province,this.canton,this.district,
      this.email,this.username, this.password).subscribe(res => {
        console.log("Resp: ", res);
        this.router.navigateByUrl('/logIn');
      }, error => {
        alert("ERROR");
      });

  }
}
