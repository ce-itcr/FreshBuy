import { Component, OnInit } from '@angular/core';
import { UserandPass, isNumber, isEmail} from '../../register/register.component';

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
  password;

  constructor() { }

  ngOnInit(): void {
  }

  public registerData(hID, hFirstName, hLastName, hProvince, hCanton,
                      hDistrict, hEmail, hPassword){

  this.ID = isNumber(hID,9);
  this.fName = hFirstName;
  this.lName = hLastName;
  this.province = hProvince;
  this.canton = hCanton;
  this.district = hDistrict;
  this.email = isEmail(hEmail);
  this.password = hPassword;


  alert("ID: " + this.ID + "\n" +
          "Nombre: " + this.fName + "\n" +
          "Apellido: " + this.lName + "\n" +
          "Provincia: " + this.province + "\n" +
          "Canton: " + this.canton + "\n" +
          "Distrito: " + this.district + "\n" +
          "email: " + this.email + "\n" +
          "Contraseña: " + this.password + "\n");
    //UserandPass.push([this.ID + "C",this.password]);
    //alert(UserandPass);

  }
}
