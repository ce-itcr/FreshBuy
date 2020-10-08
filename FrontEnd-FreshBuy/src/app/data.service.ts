import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    console.log("Hola");
    return this.http.get<any>("/api/Admin");
  }

  postTest():Observable<JSON>{

    console.log("2SADSASADSA");

    return this.http.post<JSON>("/api/Admin/Producer/addtest2", {"id": 3043034034, "name": "Agustín", "last_name": "Venegas"});
  }

}
