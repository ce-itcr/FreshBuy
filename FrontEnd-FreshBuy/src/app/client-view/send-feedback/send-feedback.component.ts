import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComunicationService } from 'src/app/comunication.service';

@Component({
  selector: 'app-send-feedback',
  templateUrl: './send-feedback.component.html',
  styleUrls: ['./send-feedback.component.css']
})
export class SendFeedbackComponent implements OnInit {

  constructor(private CS:ComunicationService, private router: Router, private modal:NgbModal) { }

  //SE INICIALIZA LA VENTANA EMERGENTE (pop-up)
  openModal(content){ this.modal.open(content,{size:'sm', centered:true});}

  sendComments(producer_qf, app_qf, producer_id, comments){
    this.CS.sendFeedback(producer_qf,app_qf, producer_id,comments);
  }

  ngOnInit(): void {

  }


}
