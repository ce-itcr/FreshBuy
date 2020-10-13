import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ComunicationService } from './comunication.service';

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

export function back_disable(location: LocationStrategy){
    history.pushState(null, null, window.location.href);  
    location.onPopState(() => {
    history.pushState(null, null, window.location.href);
  });  
}
