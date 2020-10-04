import { Component, OnInit } from '@angular/core';
import { UserandPass } from '../../register/register.component';

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


    
    UserandPass.push([this.ID + "C",this.password]);
    alert(UserandPass);

  }
}
