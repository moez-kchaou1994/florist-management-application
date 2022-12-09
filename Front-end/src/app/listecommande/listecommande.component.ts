import { Component, OnInit } from '@angular/core';
import{FleureService} from '../services/fleure.service';
import { Commande } from '../shared/commande';
import { Router } from '@angular/router';
import {  SimpleModalService } from 'ngx-simple-modal';
import { ModalMsgComponent } from '../modal-msg/modal-msg.component';
@Component({
  selector: 'app-listecommande',
  templateUrl: './listecommande.component.html',
  styleUrls: ['./listecommande.component.css']
})
export class ListecommandeComponent implements OnInit {
  c:any=[]=[];
  f:any;
  b:any;
  b1:any;
  cl:any;
  constructor(private fleureserv:FleureService,private simpleModalService:SimpleModalService,private route:Router ) { }
  

  ngOnInit(): void {
    this.chargeCommande();
  }
  chargeCommande() {
    
    this.fleureserv.getallcommande().subscribe(data => 
      {
        this.c = data;
        //console.log(data);
        for(let i=0 ; i< data.length; i++){
          //@ts-ignore
          for(let j=0 ; j< data[i].fleures.length; j++)
           this.f=data[i].fleures[j].nom_fleure;
        }
        for(let i=0 ; i< data.length; i++){
          //@ts-ignore
          for(let j=0 ; j< data[i].bouquets.length; j++)
           this.b=data[i].bouquets[j].nom_bouquet;
           

        }
        for(let i=0 ; i< data.length; i++){
          //@ts-ignore
          for(let j=0 ; j< data[i].bouquets.length; j++)
          this.b1=data[i].bouquets[j].prix_b;

        }
        for(let i=0 ; i< data.length; i++){
          //@ts-ignore
          for(let j=0 ; j< data[i].clients.length; j++)
           this.cl=data[i].clients[j].nom_client;
           

        }
        
      }),
      (err:any)=>console.log(err);
     
    
  }

}
