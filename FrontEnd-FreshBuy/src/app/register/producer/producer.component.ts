import { Component, OnInit } from '@angular/core';
import { UserandPass, isNumber} from '../../register/register.component';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css',
              './../../app.component.css']
})
export class ProducerComponent implements OnInit {

  ID;
  fName;
  lName;
  province;
  canton;
  district;
  birthdate;
  phoneNum;
  SINPE;
  deliveryLoc;

  constructor() { }

  ngOnInit(): void {
  }

  public registerData(hID, hFirstName, hLastName, hProvince, hCanton,
                      hDistrict, hBirthdate, hPhone, hSINPE, hDelivery){
    this.ID = isNumber(hID,9);
    this.fName = hFirstName;
    this.lName = hLastName;
    this.province = hProvince;
    this.canton = hCanton;
    this.district = hDistrict;
    this.birthdate = hBirthdate;
    this.phoneNum = isNumber(hPhone,8);
    this.SINPE = isNumber(hSINPE,8);
    this.deliveryLoc = hDelivery;

    alert("ID: " + this.ID + "\n" +
          "Nombre: " + this.fName + "\n" +
          "Apellido: " + this.lName + "\n" +
          "Provincia: " + this.province + "\n" +
          "Canton: " + this.canton + "\n" +
          "Distrito: " + this.district + "\n" +
          "Nacimiento: " + this.birthdate + "\n" +
          "Número Tel: " + this.phoneNum + "\n" +
          "SINPE: " + this.SINPE + "\n" +
          "Entrega: " + this.deliveryLoc + "\n");

    UserandPass.push([this.ID + "P","hola"]);

  }

}
