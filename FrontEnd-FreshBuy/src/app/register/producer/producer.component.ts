import { Component, OnInit } from '@angular/core';
import { isNumber } from '../../register/register.component';
import { HttpClient } from '@angular/common/http'
import { ComunicationService } from 'src/app/comunication.service';
import { Router } from '@angular/router';

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
  username;
  password;
  flag: boolean = true;

  constructor(private http: HttpClient, private CS: ComunicationService, private router: Router) { }

  ngOnInit(): void {
  }

  //SE PREPARAN LOS DATOS A ENVIAR, OBTENIDOS DESDE EL HTML
  public registerData(person_id, name, last_name, province, canton, district,
     birth_date, phone_number, sinpe_number, deliveryLoc,username, password){

    this.ID = isNumber(person_id,9);
    this.fName = name;
    this.lName = last_name;
    this.province = province;
    this.canton = canton;
    this.district = district;
    this.birthdate = birth_date;
    this.phoneNum = isNumber(phone_number,8);
    this.SINPE = isNumber(sinpe_number,8);
    this.deliveryLoc = deliveryLoc;
    this.username = username;
    this.password = password;

    if(this.ID !== "Error" && this.phoneNum !== "Error" && this.SINPE !== "Error"){
      this.sendProducer();
    }

  }

  //SE COMUNICA CON EL API Y LE ENVÍA LOS DATOS DEL PRODUCTOR
  sendProducer()
  {
    this.CS.sendProducerData(this.ID,this.fName,this.lName,this.province,this.canton,this.district,
      this.birthdate,this.phoneNum,this.SINPE,this.deliveryLoc,this.username, this.password).subscribe(res => {
        console.log("Resp: ", res);
        this.router.navigateByUrl('/logIn');
      }, error => {
        alert("ERROR");
      });
  }

}
