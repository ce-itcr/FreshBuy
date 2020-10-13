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
  
  public getAffiliations(){
    return this.http.get<string[]>("api/Admin/affiliations/getAffiliations");
  }

  public getCategories(){
    return this.http.get<string[]>("api/Admin/Categories/getCategories");
  }

  public getProducts(){
    return this.http.get<string[]>("api/Consumer/getProducts");
  }

  //SEND REGISTER PRODUCER DATA TO API
  public sendProducerData(person_id, name, last_name, province, canton, district,
    birth_date, phone_number, sinpe_number, delivery_locations, username, password){
    
    return this.http.post<JSON>("api/Login/affiliation/add",
    {"person_id": person_id ,
    "name" : name,
    "last_name": last_name,
    "province": province,
    "canton": canton,
    "district": district,
    "birth_date":"30/09/2000",
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

  public sendItemsToBuy(itemsToBuy:any[]){
    return this.http.post<JSON[]>("api/Consumer/Buy", itemsToBuy);
  }


  denyAffiliation(producer_id){
    return this.http.post<JSON>("api/Admin/affiliation/delete",{"producer_id": producer_id}).subscribe(res => {
      alert(res);
    })
  }

  acceptAffiliation(producer_id){
    return this.http.post<JSON>("api/Admin/affiliation/accept",{"producer_id": producer_id}).subscribe(res => {
      alert(res);
    })
  }


  createCategory(category_id,category_name){
    return this.http.post<JSON>("api/admin/categories/add",{"category_id": category_id,"category_name": category_name}).subscribe(res => {
      console.log("RES", res);
      alert("Categoria creada exitosamente. Actualice la página para poder observar los cambios.");
    }, error => {
      alert("Se produjo un error al crear la categoria en la base de datos. Intente más tarde.");
    })
  }

  deleteCategory(category_id){
    return this.http.post<JSON>("api/admin/categories/delete",{"category_id": category_id}).subscribe(res => {
      console.log("RES", res);
      alert("Categoria eliminada exitosamente. Actualice la página para poder observar los cambios.");
    }, error => {
      alert("Se produjo un error al eliminar la categoria en la base de datos. Intente más tarde.");
    })
  }

  updateCategory(category_id, category_name){
    return this.http.post<JSON>("api/admin/categories/update",{"category_id": category_id,"category_name": category_name}).subscribe(res => {
      console.log("RES", res);
      alert("Categoria actualizada exitosamente. Actualice la página para poder observar los cambios.");
    }, error => {
      alert("Se produjo un error al actualizar la categoria en la base de datos. Intente más tarde.");
    })
  }



  deleteProducer(producer_id){
    return this.http.post<JSON>("api/admin/producer/delete",{"producer_id": producer_id}).subscribe(res => {
      console.log("RES", res);
      alert("Productor eliminado exitosamente. Actualice la página para poder observar los cambios.");
    }, error => {
      alert("Se produjo un error al eliminar el productor de la base de datos. Intente más tarde.");
    })
  }

  createProducer(person_id, name, last_name, province, canton, district, birth_date, phone_number, sinpe_number,delivery_locations,username, password){
    return this.http.post<JSON>("api/login/producer/add",{"person_id":person_id,"name":name,"last_name":last_name,"province":province,"canton":canton,"district":district,"bith_date":birth_date,
                                                            "phone_number":phone_number,"sinpe_number":sinpe_number,"delivery_locations": ["Cartago","Dulce Nombre"], "username": username, "password": password}).subscribe(res => {
                                                              alert("Productor creado exitosamente. Actualice la página para poder observar los cambios.");
                                                            }, error => {
                                                              alert("Se produjo un error al crear el productor de la base de datos. Intente más tarde.");
                                                            })
  }
  
  updateProducer(person_id, name, last_name, province, canton, district, birth_date, phone_number, sinpe_number,delivery_locations, username, password){
    return this.http.post<JSON>("api/login/producer/update",{"person_id":person_id,"name":name,"last_name":last_name,"province":province,"canton":canton,"district":district,"bith_date":birth_date,
                                                            "phone_number":phone_number,"sinpe_number":sinpe_number,"delivery_locations": ["Cartago","Dulce Nombre"], "username": username, "password": password}).subscribe(res => {
                                  console.log("RES", res);                                                              alert("Productor creado exitosamente. Actualice la página para poder observar los cambios.");
                                  alert("Productor actualizado exitosamente. Actualice la página para poder observar los cambios.");
                                }, error => {
                                  alert("Se produjo un error al actualizar el productor de la base de datos. Intente más tarde.");
                                })
  }



  createProduct(product_id, product_name, category, category_id, sale_mode, availability, price, photo, producer_id){
    return this.http.post<JSON>("api/producer/product/add",{"product_id":product_id,"product_name":product_name,"category":category,"category_id": category_id,
                                "sale_mode":sale_mode,"availability":availability,"price":price,"photo":photo,"producer_id":producer_id}).subscribe(res => {
                                  console.log("RES", res);
                                })
  }
}
