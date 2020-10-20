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

  public sendId(id: string){
    return this.http.post<JSON>("api/Consumer/getProduct",
     {"product_id":parseInt(id)});
  }

  //GET PRODUCERS DATA FROM API
  public getProducers(){
    return this.http.get<string[]>("api/Admin/Producers/getProducers");
  }

  //GET AFFILIATIONS DATA FROM API
  public getAffiliations(){
    return this.http.get<string[]>("api/Admin/affiliations/getAffiliations");
  }

  //GET CATEGORIES DATA FROM API
  public getCategories(){
    return this.http.get<string[]>("api/Admin/Categories/getCategories");
  }

  //GET PRODUCTS DATA FROM API
  public getProducts(){
    return this.http.get<string[]>("api/Consumer/getProducts");
  }

  //SEND PRODUCER REGISTER DATA TO API
  public sendProducerData(person_id, name, last_name, province, canton, district,
    birth_date, phone_number, sinpe_number, delivery_locations, username, password){

    return this.http.post<JSON>("api/Login/affiliation/add",
    {"person_id": person_id,
    "name" : name,
    "last_name": last_name,
    "province": province,
    "canton": canton,
    "district": district,
    "birth_date": birth_date,
    "phone_number": phone_number,
    "sinpe_number": sinpe_number,
    "delivery_locations": delivery_locations,
    "username": username,
    "password": password}
    );
  }

  //SEND CONSUMER REGISTER DATA TO API
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

  ////GET PRODUCTS DATA FOR PRODUCER-VIEW USAGE, FROM API
  public getProductsForProducer(name:string){
    return this.http.post<string[]>("api/Producer/getProducts", {"username":name});
  }

  //SEND ITEMS FROM CART TO API
  public sendItemsToBuy(itemsToBuy:any[]){
    return this.http.post<JSON[]>("api/Consumer/Buy", itemsToBuy);
  }

  //DENY AFFILIATION TO PRODUCER
  denyAffiliation(producer_id){
    return this.http.post<JSON>("api/Admin/affiliation/delete",{"producer_id": producer_id}).subscribe(res => {

    })
  }

  //ACCEPT AFFILIATION TO PRODUCER
  acceptAffiliation(producer_id){
    return this.http.post<JSON>("api/Admin/affiliation/accept",{"producer_id": producer_id}).subscribe(res => {
    })
  }

  //SEND NEW CATEGORY JSON TO API
  createCategory(category_id,category_name){
    return this.http.post<JSON>("api/admin/categories/add",{"category_id": category_id,"category_name": category_name}).subscribe(res => {
      console.log("RES", res);
      alert("Categoria creada exitosamente. Actualice la página para poder observar los cambios.");
    }, error => {
      alert("Se produjo un error al crear la categoria en la base de datos. Intente más tarde.");
    })
  }

  //SEND CATEGORY ID TO ELIMINATE
  deleteCategory(category_id){
    return this.http.post<JSON>("api/admin/categories/delete",{"category_id": category_id}).subscribe(res => {
      console.log("RES", res);
      alert("Categoria eliminada exitosamente. Actualice la página para poder observar los cambios.");
    }, error => {
      alert("Se produjo un error al eliminar la categoria en la base de datos. Intente más tarde.");
    })
  }

  //SEND CATEGORY ID AND A NEW VALUE OF NAME TO UPDATE
  updateCategory(category_id, category_name){
    return this.http.post<JSON>("api/admin/categories/update",{"category_id": category_id,"category_name": category_name}).subscribe(res => {
      console.log("RES", res);
      alert("Categoria actualizada exitosamente. Actualice la página para poder observar los cambios.");
    }, error => {
      alert("Se produjo un error al actualizar la categoria en la base de datos. Intente más tarde.");
    })
  }


  //SEND PRODUCER ID FOR DELETE FROM API
  deleteProducer(producer_id){
    return this.http.post<JSON>("api/admin/producer/delete",{"producer_id": producer_id}).subscribe(res => {
      console.log("RES", res);
      alert("Productor eliminado exitosamente. Actualice la página para poder observar los cambios.");
    }, error => {
      alert("Se produjo un error al eliminar el productor de la base de datos. Intente más tarde.");
    })
  }

  //SEND ALL DATA OF PRODUCER REGISTER TO API TO CREATE NEW PRODUCER (Admin-View)
  createProducer(person_id, name, last_name, province, canton, district, birth_date, phone_number, sinpe_number,delivery_locations,username, password){
    return this.http.post<JSON>("api/login/producer/add",{"person_id": person_id,
                                                          "name" : name,
                                                          "last_name": last_name,
                                                          "province": province,
                                                          "canton": canton,
                                                          "district": district,
                                                          "birth_date": birth_date,
                                                          "phone_number": phone_number,
                                                          "sinpe_number": sinpe_number,
                                                          "delivery_locations": delivery_locations,
                                                          "username": username,
                                                          "password": password}).subscribe(res => {
                                                              alert("Productor creado exitosamente. Actualice la página para poder observar los cambios.");
                                                            }, error => {
                                                              alert("Se produjo un error al crear el productor de la base de datos. Intente más tarde.");
                                                            })
  }

  //SEND ALL DATA OF PRODUCERS, TO UPDATE SEVERAL VALUES
  updateProducer(person_id, name, last_name, province, canton, district, birth_date, phone_number, sinpe_number,delivery_locations, username, password){
    return this.http.post<JSON>("api/admin/producer/update",{"person_id":person_id,"name":name,"last_name":last_name,"province":province,"canton":canton,"district":district,"birth_date":birth_date,
                                                            "phone_number":phone_number,"sinpe_number":sinpe_number,"delivery_locations": delivery_locations, "username": username, "password": password}).subscribe(res => {
                                  console.log("RES", res);                                                              alert("Productor creado exitosamente. Actualice la página para poder observar los cambios.");
                                  alert("Productor actualizado exitosamente. Actualice la página para poder observar los cambios.");
                                }, error => {
                                  alert("Se produjo un error al actualizar el productor de la base de datos. Intente más tarde.");
                                })
  }


  //SEND ALL DATA OF A NEW PRODUCTO FOR CREATE A NEW ONE
  createProduct(product_name, category, category_id, sale_mode, availability, price, photo, producer_id){
    return this.http.post<JSON>("api/producer/product/add",{"product_name":product_name,"category":category,"category_id": category_id,
                                "sale_mode":sale_mode,"availability":availability,"price":price,"photo":photo,"producer_id":producer_id}).subscribe(res => {
                                  console.log("RES", res);
                                })
  }

  //SEND PRODUCT ID TO DELETE A PRODUCT
  deleteProduct(product_id){
    return this.http.post<JSON>("api/producer/product/delete",{"product_id":parseInt(product_id)});
  }

  //SEND FEEDBACK
  sendFeedback(producer_qf, app_qf, producer_id, comments){
      return this.http.post<JSON>("api/consumer/comment/add",{"producer_qf":producer_qf, "app_qf":app_qf, "producer_id": producer_id,"comments":comments}).subscribe(res => {
        alert("Comentarios Enviados Exitosamente");
      }, error => {
        alert("Ocurrió algún error al enviar los comentarios.");
      });
    }
}
