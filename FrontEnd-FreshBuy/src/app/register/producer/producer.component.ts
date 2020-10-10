import { Component, OnInit } from '@angular/core';
import { UserandPass, isNumber} from '../../register/register.component';
import { HttpClient } from '@angular/common/http'

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
  password;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public registerData(hID, hFirstName, hLastName, hProvince, hCanton,
                      hDistrict, hBirthdate, hPhone, hSINPE, hDelivery, password){
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
    this.password = password;

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

    //UserandPass.push([this.ID + "P","hola"]);


  }

  postTest(person_id, name, last_name, province, canton, district, birth_date, phone_number, sinpe_number, delivery_locations, password)//:Observable<JSON>
  {
    console.log("si está entranfo");

    return this.http.post<JSON>("api/Login/Producer/add",
    {"person_id": person_id ,
    "name" : name,
    "last_name": last_name,
    "province": province,
    "canton": canton,
    "district": district,
    "birth_date":birth_date,
    "phone_number": phone_number,
    "sinpe_number": sinpe_number,
    "delivery_locations": delivery_locations,
    "password": password}
    ).subscribe(res => console.log("RES", res));

    //return this.http.post<JSON>("api/Login/Producer/add",
    //{
    //  "person_id": 100000000,
    //  "name": "1322",
    //  "last_name": "132213",
    //  "province": "Cartago",
    //  "canton": "Central",
    //  "district": "Dulce Nombre",
    //  "birt_date": "00/00/00",
    //  "phone_number": 8888888,
    //  "sinpe_number": 8888888,
    //  "delivery_cations": "Dulce Nombre, Agua Caliente, TEC",
    //  "password": "lospalotes123123"
  //}).subscribe(res => console.log("RES", res));
  }

}
