import { Component, OnInit } from '@angular/core';
import { UserandPass, isNumber} from '../../register/register.component';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

  ID;
  name;
  adress;
  birthday;
  telephone;
  SINPE;

  constructor() { }

  ngOnInit(): void {
  }

  public registerData(hID, hName, hAdress, hBirthday, hTelephone, hSINPE){
    this.ID = isNumber(hID,9);
    this.name = new String(hName);
    this.adress = new String(hAdress);
    this.birthday = new String(hBirthday);
    this.telephone = isNumber(hTelephone,8);
    this.SINPE = isNumber(hSINPE,8);

    alert("ID: " + this.ID + "\n" +
          "Name: " + this.name + "\n" +
          "Adress: " + this.adress + "\n" +
          "Birthday: " + this.birthday + "\n" +
          "Telephone: " + this.telephone + "\n" +
          "SINPE: " + this.SINPE + "\n");

    UserandPass.push([this.ID + "P","hola"]);

  }

}
