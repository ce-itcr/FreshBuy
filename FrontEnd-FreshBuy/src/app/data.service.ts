import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAll()//:Observable<any>
  {
    //console.log("Hola");
    return this.http.get<any>("/api/Admin/response");
  }

  postTest()//:Observable<JSON>
  {
    return this.http.post<JSON>("api/Login/Admin/consult", {"username": "admin", "password": "admin"});
  }

  postTest2()//:Observable<JSON>
  {
    console.log("si está entranfo");

    return this.http.post<JSON>("api/Login/Producer/add",
    {
      "person_id": 305120512,
      "name": "juanito",
      "last_name": "lospalotes",
      "province": "Cartago",
      "canton": "Central",
      "district": "Dulce Nombre",
      "birt_date": "00/00/00",
      "phone_number": 8888888,
      "sinpe_number": 8888888,
      "delivery_cations": "Dulce Nombre, Agua Caliente, TEC",
      "password": "lospalotes"
  }).subscribe(res => console.log("RES", res));
  }

}
