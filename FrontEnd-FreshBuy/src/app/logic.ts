import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ComunicationService } from './comunication.service';

//OBTIENE UN JSON DE PRODUCTORES DESDE EL API Y ACTUALIZA LA LISTA GLOBAL DE PRODUCTORES
//Y GENERA LA TABLA CON LOS NUEVOS DATOS EN PRODUCER-MANAGEMENT (ADMIN-VIEW)
export function update_producers(router: Router,CS: ComunicationService){
  
    CS.getProducers().subscribe(res => {
      var producerList: any[] = [];
      for (let i=0;i<res.length;i++){
        producerList.push(JSON.parse(res[i]))
        delete producerList[i]["username"]
        delete producerList[i]["password"]
      }
      globalThis.producers = producerList;
      router.navigateByUrl('/producerManagement');
    });
  }

//OBTIENE UN JSON DE PRODUCTOS DESDE EL API Y ACTUALIZA LA TABLA DE LOS MISMOS
//EN PRODUCTS MANAGEMENT (PRODUCER-VIEW)
  export function update_products_for_producer(CS: ComunicationService, router: Router){
    CS.getProductsForProducer(localStorage.getItem("user")).subscribe(res => {
      var productsList: any[] = [];
        for (let i=0;i<res.length;i++){
          productsList.push(JSON.parse(res[i]))
        }
        globalThis.products = productsList;
        router.navigateByUrl('/productsManagement');
    })
  }

//OBTIENE UN JSON DE LAS AFILIACIONES PENDIENTES ALMACENADAS EN EL API
//Y ACTUALIZA LA TABLA DE LOS MISMOS EN PRODUCTS MANAGEMENT (PRODUCER-VIEW)
export function update_affiliations(router: Router,CS: ComunicationService){
  CS.getAffiliations().subscribe(res => {
    var affiliationsList: any[] = [];
    for (let i=0;i<res.length;i++){
      affiliationsList.push(JSON.parse(res[i]))
      delete affiliationsList[i]["username"]
      delete affiliationsList[i]["password"]
    }
    globalThis.producers = affiliationsList;
    router.navigateByUrl('/affiliationManagement');
  });
}

//OBTIENE UN JSON DE LAS CATEGORÍAS ACTUALES QUE SE ENCUENTRAN EN EL API 
//POSTERIORMENTE ACTUALIZA LA TABLA DE LOS MISMOS EN PRODUCTS MANAGEMENT (PRODUCER-VIEW)
export function update_categories(router: Router, CS: ComunicationService){
    CS.getCategories().subscribe(res => {
        var categoryList: any[] = [];
        for (let i=0;i<res.length;i++){
            categoryList.push(JSON.parse(res[i]))
            delete categoryList[i]["username"]
            delete categoryList[i]["password"]
        }
        globalThis.categories = categoryList;
        router.navigateByUrl('/categoryManagement');
    },error => {
        alert("NEL");
    });
}

//MEDIANTE UNA INSTANCIA DE LOCATIONSTRATEGY (location), SE DESHABILITA LA
//POSIBILIDAD DE RETROCEDER (MEDIANTE EL BUSCADOR)
export function back_disable(location: LocationStrategy){
    history.pushState(null, null, window.location.href);  
    location.onPopState(() => {
    history.pushState(null, null, window.location.href);
  });  
}
