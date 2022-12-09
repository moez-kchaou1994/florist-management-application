import { Component, OnInit } from '@angular/core';
import { Fleure } from '../shared/fleure';
import { ActivatedRoute, Router } from '@angular/router';
import {  SimpleModalService } from 'ngx-simple-modal';
import { FleureService } from '../services/fleure.service';
import { ModalMsgComponent } from '../modal-msg/modal-msg.component';
import { Commande } from '../shared/commande';
import { Bouquet } from '../shared/bouquet';
@Component({
  selector: 'app-allliste',
  templateUrl: './allliste.component.html',
  styleUrls: ['./allliste.component.css']
})
export class AlllisteComponent implements OnInit {
  commande:Commande=new Commande();
  b :any=[]=[];
  bouq :any=[]=[];
  f :any=[]=[];
  co :any=[]=[];
  num_com=100;
  num_fleure:any;
  num_bouquet:any;
  prix_f:any;
  prix_b:any;
  tc:any;
  total_c:any;
  constructor(private fleureserv:FleureService,private simpleModalService:SimpleModalService,private route:Router, private actRoute:ActivatedRoute ) { }
  ngOnInit(): void {
    //sessionStorage.setItem("commade", JSON.stringify(this.commande));
    this.num_com = this.actRoute.snapshot.params["_num"]
    //console.log(this.num_com);
    
     this.chargefleure();
    this.chargebouquet();
    this.chargecommande();
    
  }
 
  /*
  addFlowerToCommand(fleure:Fleure){
      this.commande.fleures?.push(fleure)
      console.log(this.commande);
      //let json = JSON.stringify(this.commande);
      //console.log(json);
      //sessionStorage.setItem("commande", json);
  }
  */
 /*
  addBouquetToCommand(bouquet:Bouquet){
    this.commande.bouquets?.push(bouquet)
    console.log(this.commande);
    
    //let json = JSON.stringify(this.commande);
    //console.log(json);
    //sessionStorage.setItem("commande", json);
}
*/
/*
saveCommande(){
  this.fleureserv.saveCommande(this.commande).subscribe(
    data => {
      console.log(data);
    },
    err => {
      console.log(err);
      
    }
  )
}*/
  commande_f(num_fleure:any){
    //console.log(this.commande)
    this.simpleModalService.addModal(ModalMsgComponent, {
      title: 'Message!!!!',
      msg: "votre commande est envoyé!!!!!!!!!!!!!!",
      type: 'success',
      nature: 'msg'
      
    }).subscribe(() => { });
    this.fleureserv.Createcommandef(this.num_com,num_fleure,this.commande).subscribe(data => 
      {
        this.f = data;
        
        
      },
      (err:any)=>console.log(err));
      
  }
  commande_b(num_bouquet:any){
    this.simpleModalService.addModal(ModalMsgComponent, {
      title: 'Message!!!!',
      msg: "votre commande est envoyé!!!!!!!!!!",
      type: 'success',
      nature: 'msg'
    }).subscribe(() => { });
    this.fleureserv.Createcommandeb(this.num_com,num_bouquet,this.commande).subscribe(data => 
      {
        this.bouq = data;
        
        
      }),
      (err:any)=>console.log(err);
      
     
     
  }
  displaytotal(){
    this.fleureserv.getallcommande().subscribe(data => 
      {
        this.co = data;
        for(let i=0 ; i< data.length; i++){
          //@ts-ignore
         
           console.log(this.tc=data[i].total_c);
        }
      }),
      (err:any)=>console.log(err);
      this.simpleModalService.addModal(ModalMsgComponent, {
        title: 'Message!!!!',
        msg: this.tc,
        type: 'success',
        nature: 'msg'
      }, {
        draggable: false
      }).subscribe(() => { });
    
  }
  chargefleure() {
    
    this.fleureserv.getfleure().subscribe(data => 
      {
        this.f = data;
        
        
      }),
      (err:any)=>console.log(err);
     
    
  }
  chargebouquet() {
    
    this.fleureserv.getboquet().subscribe(data => 
      {
        this.b = data;
        
        
      }),
      (err:any)=>console.log(err);
     
    
  }
  chargecommande() {
    
    this.fleureserv.getallcommande().subscribe(data => 
      {
        this.co = data;
       
      }),
      (err:any)=>console.log(err);
     
     
  }

}
