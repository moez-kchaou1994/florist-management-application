import { Component, OnInit } from '@angular/core';
import{FleureService} from '../services/fleure.service';
import { Fleure } from '../shared/fleure';
import { Router } from '@angular/router';
import {  SimpleModalService } from 'ngx-simple-modal';
import { ModalMsgComponent } from '../modal-msg/modal-msg.component';
import { Commande } from '../shared/commande';
@Component({
  selector: 'app-homeclient',
  templateUrl: './homeclient.component.html',
  styleUrls: ['./homeclient.component.css']
})
export class HomeclientComponent implements OnInit {
num_client=0;
f :any=[]=[];
commande:Commande=new Commande();
 constructor (private fleureserv:FleureService,private simpleModalService:SimpleModalService, private router:Router){}
  
  ngOnInit(): void {
  }
  createcommande(){
    this.fleureserv.createcommande(this.num_client,this.commande).subscribe(data => 
      {
        this.f = data;
        this.router.navigate(["/allliste/"+  data.num_com])
        // console.log(data);
        // sessionStorage.setItem("num_cmd", data.num_com)
        
      }),
      (err:any)=>console.log(err);
      
     
  }

}
