import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
export interface ConfirmModel { }
@Component({
  selector: 'app-modal-msg',
  templateUrl: './modal-msg.component.html',
  styleUrls: ['./modal-msg.component.css']
})
export class ModalMsgComponent extends SimpleModalComponent<ConfirmModel, boolean> implements OnInit {

  title: any;
  msg: any;
  msg2:any;
  type: any;
  nature: any;

  constructor() {
    super(); 
  }

  ngOnInit(): void {
  }

  confirm() {
    this.result = true;
    this.close();
  }

  reject() {
    this.result = false;
    this.close();
  }

}
