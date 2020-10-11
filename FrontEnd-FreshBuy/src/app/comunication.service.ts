import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  constructor(private http: HttpClient) { }

  //SEND USER DATA TO API
  public sendData(user : string, password : string){
    return this.http.post<JSON>("api/Login/Consumer/consult",
     {"username": user, "password": password});
  }

  public getProducers(){
    return this.http.get<string[]>("api/Admin/Producers/getProducers");
  }



  //SEND REGISTER PRODUCER DATA TO API
  public sendProducerData(person_id, name, last_name, province, canton, district,
    birth_date, phone_number, sinpe_number, delivery_locations, username, password){
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
    "username": username,
    "password": password}
    );
  }
  public sendConsumerData(person_id, name, last_name, province, canton, district,
     email, username, password){
    return this.http.post<JSON>("api/Login/Consumer/add",
    {"person_id": person_id ,
    "name" : name,
    "last_name": last_name,
    "province": province,
    "canton": canton,
    "district": district,
    "email": email,
    "username": username,
    "password": password}
    );
  }


}
