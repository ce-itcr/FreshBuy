import { Component, OnInit } from '@angular/core';
import { isNumber, isEmail } from '../../register/register.component';
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

  //SE PREPARAN LOS DATOS DE UN NUEVO CONSUMIDOR, OBTENIDOS DESDE EL HTML
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

  }

  //SE ENVÍAN LOS DATOS AL API
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
