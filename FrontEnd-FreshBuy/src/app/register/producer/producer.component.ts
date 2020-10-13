import { Component, OnInit } from '@angular/core';
import { UserandPass, isNumber} from '../../register/register.component';
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

  public registerData(person_id, name, last_name, province, canton, district,
     birth_date, phone_number, sinpe_number, delivery_locations,username, password){ 

    this.ID = isNumber(person_id,9);
    this.fName = name;
    this.lName = last_name;
    this.province = province;
    this.canton = canton;
    this.district = district;
    this.birthdate = birth_date;
    this.phoneNum = isNumber(phone_number,8);
    this.SINPE = isNumber(sinpe_number,8);
    this.deliveryLoc = ["Correos Esparza","Juanilama"];
    this.username = username;
    this.password = password;

    if(this.ID !== "Error" && this.phoneNum !== "Error" && this.SINPE !== "Error"){
      this.postTest();
    }

    alert("ID: " + this.ID + "\n" +
          "Nombre: " + this.fName + "\n" +
          "Apellido: " + this.lName + "\n" +
          "Provincia: " + this.province + "\n" +
          "Canton: " + this.canton + "\n" +
          "Distrito: " + this.district + "\n" +
          "Nacimiento: " + this.birthdate + "\n" +
          "Número Tel: " + this.phoneNum + "\n" +
          "SINPE: " + this.SINPE + "\n" +
          "Entrega: " + this.deliveryLoc + "\n" +
          "Nombre de Usuario " + this.username + "\n" +
          "Contraseña" + this.password);

    //UserandPass.push([this.ID + "P","hola"]);

  }

  postTest()//:Observable<JSON>
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
