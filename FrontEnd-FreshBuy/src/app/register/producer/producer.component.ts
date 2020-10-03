import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

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
    this.ID = hID;
    this.name = hName;
    this.adress = hAdress;
    this.birthday = hBirthday;
    this.telephone = hTelephone;
    this.SINPE = hSINPE;

    alert("ID: " + this.ID + "\n" +
          "Name: " + this.name + "\n" +
          "Adress: " + this.adress + "\n" +
          "Birthday: " + this.birthday + "\n" +
          "Telephone: " + this.telephone + "\n" +
          "SIMPE: " + this.SINPE + "\n");

  }

}
