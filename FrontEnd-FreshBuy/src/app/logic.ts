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

export function back_disable(location: LocationStrategy){
    history.pushState(null, null, window.location.href);  
    location.onPopState(() => {
    history.pushState(null, null, window.location.href);
  });  
}