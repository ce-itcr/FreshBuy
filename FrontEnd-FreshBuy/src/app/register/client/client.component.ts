import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  ID;
  name;
  adress;
  eMail;
  password;

  constructor() { }

  ngOnInit(): void {
  }

  public registerData(hID, hName, hAdress, hEMail, hPassword){
    this.ID = hID;
    this.name = hName;
    this.adress = hAdress;
    this.eMail = hEMail;
    this.password = hPassword;

    alert("ID: " + this.ID + "\n" +
          "Name: " + this.name + "\n" +
          "Adress: " + this.adress + "\n" +
          "Telephone: " + this.eMail + "\n" +
          "SIMPE: " + this.password + "\n");

  }
}
