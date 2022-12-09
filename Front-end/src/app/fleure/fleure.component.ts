import { Component, OnInit } from '@angular/core';
import{FleureService} from '../services/fleure.service';
import { Fleure } from '../shared/fleure';
import { Router } from '@angular/router';
import {  SimpleModalService } from 'ngx-simple-modal';
import { ModalMsgComponent } from '../modal-msg/modal-msg.component';
@Component({
  selector: 'app-fleure',
  templateUrl: './fleure.component.html',
  styleUrls: ['./fleure.component.css']
})
export class FleureComponent implements OnInit {
  b :any=[]=[];
  constructor(private fleureserv:FleureService,private simpleModalService:SimpleModalService,private route:Router ) { }

  ngOnInit(): void {
    this.chargefleure();
  }
  
  chargefleure() {
    
    this.fleureserv.getfleure().subscribe(data => 
      {
        this.b = data;
        console.log(this.b);
        
      }),
      (err:any)=>console.log(err);
     
    
  }
  deletefleure(num_fleure:any){
    
      this.simpleModalService.addModal(ModalMsgComponent, {
        title: 'Attention',
        msg: 'Etes vous sure de supprimer ce produit ?',
        type: 'danger',
        nature: 'confirm'
      }, {
        draggable: false
      }).subscribe((confirm) => {
        if (confirm) {
          this.fleureserv.deletefleure(num_fleure).subscribe(data=>{
            this.chargefleure()});
        }
      });
  
      }
  }


